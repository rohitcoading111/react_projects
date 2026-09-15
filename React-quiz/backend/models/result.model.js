import mongoose from 'mongoose';

const answerReviewSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    selectedAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  { _id: false },
);

const resultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    category: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0 },
    correct: { type: Number, required: true, min: 0 },
    totalQuestions: { type: Number, required: true, min: 1 },
    answers: { type: [answerReviewSchema], default: [] },
  },
  { timestamps: true },
);

resultSchema.index({ user: 1, createdAt: -1 });

export const Result = mongoose.model('Result', resultSchema);
