import { Router } from 'express';
import { getQuestionById, getQuestions, getRandomQuestions, gradeQuestions } from '../controllers/question.controller.js';

const router = Router();
router.get('/random', getRandomQuestions);
router.post('/grade', gradeQuestions);
router.get('/', getQuestions);
router.get('/:id', getQuestionById);

export default router;
