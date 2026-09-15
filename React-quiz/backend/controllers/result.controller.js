import mongoose from 'mongoose';
import { Result } from '../models/result.model.js';

export async function createResult(req, res, next) {
  try {
    const { category, score, correct, totalQuestions, answers = [] } = req.body;
    if (!category?.trim() || !Number.isFinite(Number(score)) || !Number.isFinite(Number(correct)) || !Number.isInteger(Number(totalQuestions)) || totalQuestions < 1) {
      return res.status(400).json({ success: false, message: 'Category, score, correct, and totalQuestions are required' });
    }

    const result = await Result.create({
      user: req.user._id,
      category: category.trim(),
      score: Number(score),
      correct: Number(correct),
      totalQuestions: Number(totalQuestions),
      answers,
    });

    return res.status(201).json({ success: true, message: 'Result saved successfully', data: result });
  } catch (error) {
    next(error);
  }
}

export async function getResults(req, res, next) {
  try {
    const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 20, 1), 100);
    const results = await Result.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(limit).lean();
    return res.json({ success: true, message: 'Results fetched successfully', data: results });
  } catch (error) {
    next(error);
  }
}

export async function getResultById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid result id' });
    }

    const result = await Result.findOne({ _id: req.params.id, user: req.user._id }).lean();
    if (!result) {
      return res.status(404).json({ success: false, message: 'Result not found' });
    }

    return res.json({ success: true, message: 'Result fetched successfully', data: result });
  } catch (error) {
    next(error);
  }
}
