import 'dotenv/config';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { connectDB, closeDB } from '../config/db.js';
import { Question } from '../models/question.model.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const questionsDirectory = path.join(scriptDirectory, '..', 'data', 'questions');
const batchSize = 1000;

function normalizeQuestion(value, fallbackCategory) {
  if (!value || typeof value !== 'object') return null;
  const { text, type, difficulty, answers, explanation = '' } = value;
  const category = value.category || fallbackCategory;

  if (!text || !type || !difficulty || !category || !Array.isArray(answers) || answers.length === 0) return null;
  if (answers.some((answer) => !answer || answer.id === undefined || !answer.text || typeof answer.isCorrect !== 'boolean')) return null;

  return {
    text: String(text).trim(),
    type: String(type).trim(),
    difficulty: String(difficulty).trim().toLowerCase(),
    category: String(category).trim(),
    answers: answers.map((answer) => ({ id: Number(answer.id), text: String(answer.text).trim(), isCorrect: answer.isCorrect })),
    explanation: String(explanation),
  };
}

async function insertBatch(batch) {
  if (batch.length === 0) return { imported: 0, duplicates: 0 };

  try {
    const inserted = await Question.insertMany(batch, { ordered: false });
    return { imported: inserted.length, duplicates: 0 };
  } catch (error) {
    const duplicateCount = error.writeErrors?.filter((writeError) => writeError.code === 11000).length || 0;
    const imported = error.insertedDocs?.length || batch.length - duplicateCount;
    if (!error.writeErrors || error.writeErrors.some((writeError) => writeError.code !== 11000)) throw error;
    return { imported, duplicates: duplicateCount };
  }
}

async function importQuestions() {
  let totalImported = 0;
  let totalDuplicates = 0;
  let totalSkipped = 0;
  const seenQuestions = new Set();

  await connectDB();
  const files = (await readdir(questionsDirectory)).filter((file) => file.endsWith('.json')).sort();

  for (const file of files) {
    const category = path.basename(file, '.json');
    const parsed = JSON.parse(await readFile(path.join(questionsDirectory, file), 'utf8'));
    const records = Array.isArray(parsed) ? parsed : parsed.questions;
    if (!Array.isArray(records)) {
      console.warn(`Skipped ${file}: expected a JSON array or { questions: [] }`);
      continue;
    }

    let batch = [];
    for (const record of records) {
      const question = normalizeQuestion(record, category);
      if (!question) {
        totalSkipped += 1;
        continue;
      }

      const key = `${question.category}\u0000${question.text}`;
      if (seenQuestions.has(key)) {
        totalDuplicates += 1;
        continue;
      }
      seenQuestions.add(key);
      batch.push(question);

      if (batch.length === batchSize) {
        const result = await insertBatch(batch);
        totalImported += result.imported;
        totalDuplicates += result.duplicates;
        console.log(`${file}: imported ${totalImported} questions so far`);
        batch = [];
      }
    }

    const result = await insertBatch(batch);
    totalImported += result.imported;
    totalDuplicates += result.duplicates;
    console.log(`Processed ${file}`);
  }

  console.log(`Import complete: ${totalImported} imported, ${totalDuplicates} duplicates, ${totalSkipped} invalid records skipped`);
}

try {
  await importQuestions();
} catch (error) {
  console.error('Question import failed:', error.message);
  process.exitCode = 1;
} finally {
  await closeDB();
}
