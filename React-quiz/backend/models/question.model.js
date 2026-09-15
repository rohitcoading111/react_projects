import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    text: { type: String, required: true, trim: true },
    isCorrect: { type: Boolean, required: true },
  },
  { _id: false },
);

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true, lowercase: true },
    category: { type: String, required: true, trim: true },
    answers: { type: [answerSchema], required: true, validate: (answers) => answers.length > 0 },
    explanation: { type: String, trim: true, default: '' },
  },
  { timestamps: true },
);

questionSchema.index({ category: 1 });
questionSchema.index({ difficulty: 1 });
questionSchema.index({ category: 1, difficulty: 1 });
questionSchema.index({ text: 1, category: 1 }, { unique: true });

export const Question = mongoose.model('Question', questionSchema);
