import { Router } from 'express';
import { createResult, getResultById, getResults } from '../controllers/result.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();
router.use(protect);
router.post('/', createResult);
router.get('/', getResults);
router.get('/:id', getResultById);

export default router;
