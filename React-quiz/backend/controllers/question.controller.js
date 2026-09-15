import mongoose from 'mongoose';
import { Question } from '../models/question.model.js';

const MAX_LIMIT = 50;
const publicProjection = { 'answers.isCorrect': 0, __v: 0 };

function queryOptions(query) {
  const limit = Math.min(Math.max(Number.parseInt(query.limit, 10) || 10, 1), MAX_LIMIT);
  const page = Math.max(Number.parseInt(query.page, 10) || 1, 1);
  const filter = {};
  if (query.category?.trim()) filter.category = query.category.trim();
  if (query.difficulty?.trim()) filter.difficulty = query.difficulty.trim().toLowerCase();
  return { filter, limit, page, skip: (page - 1) * limit };
}

export async function getQuestions(req, res, next) {
  try {
    const { filter, limit, page, skip } = queryOptions(req.query);
    const [questions, total] = await Promise.all([
      Question.find(filter, publicProjection).sort({ _id: 1 }).skip(skip).limit(limit).lean(),
      Question.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      message: 'Questions fetched successfully',
      data: questions,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
}

export async function getRandomQuestions(req, res, next) {
  try {
    const { filter, limit } = queryOptions(req.query);
    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: limit } },
      { $project: { 'answers.isCorrect': 0, __v: 0 } },
    ]);

    return res.json({ success: true, message: 'Random questions fetched successfully', data: questions });
  } catch (error) {
    next(error);
  }
}

export async function getQuestionById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid question id' });
    }

    const question = await Question.findById(req.params.id, publicProjection).lean();
    if (!question) {
      return res.status(404).json({ success: false, message: 'Question not found' });
    }

    return res.json({ success: true, message: 'Question fetched successfully', data: question });
  } catch (error) {
    next(error);
  }
}

export async function gradeQuestions(req, res, next) {
  try {
    const submissions = req.body.answers;
    if (!Array.isArray(submissions) || submissions.length === 0 || submissions.length > MAX_LIMIT) {
      return res.status(400).json({ success: false, message: 'Answers must contain between 1 and 50 items' });
    }

    const validSubmissions = submissions.filter(
      (submission) => mongoose.isValidObjectId(submission.questionId) && Number.isInteger(Number(submission.selectedAnswerId)),
    );
    if (validSubmissions.length !== submissions.length) {
      return res.status(400).json({ success: false, message: 'Each answer must include a valid questionId and selectedAnswerId' });
    }

    const questions = await Question.find({
      _id: { $in: validSubmissions.map((submission) => submission.questionId) },
    }).lean();
    const questionMap = new Map(questions.map((question) => [question._id.toString(), question]));

    const reviews = validSubmissions.map((submission) => {
      const question = questionMap.get(submission.questionId.toString());
      if (!question) return null;

      const selectedAnswer = question.answers.find((answer) => answer.id === Number(submission.selectedAnswerId));
      const correctAnswer = question.answers.find((answer) => answer.isCorrect);
      const isCorrect = Boolean(selectedAnswer?.isCorrect);

      return {
        question: question.text,
        selectedAnswer: selectedAnswer?.text || '',
        correctAnswer: correctAnswer?.text || '',
        isCorrect,
      };
    });

    if (reviews.some((review) => review === null)) {
      return res.status(400).json({ success: false, message: 'One or more questions were not found' });
    }

    const correct = reviews.filter((review) => review.isCorrect).length;
    return res.json({
      success: true,
      message: 'Quiz graded successfully',
      data: { correct, totalQuestions: reviews.length, score: Math.round((correct / reviews.length) * 100), answers: reviews },
    });
  } catch (error) {
    next(error);
  }
}
