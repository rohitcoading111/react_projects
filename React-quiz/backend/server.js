import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import questionRoutes from './routes/question.routes.js';
import resultRoutes from './routes/result.routes.js';

const app = express();
const port = Number.parseInt(process.env.PORT, 10) || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || true }));
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ message: 'QuizMaster API is running' });
});
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  if (error.name === 'ValidationError') {
    return res.status(400).json({ success: false, message: 'Invalid request data' });
  }
  return res.status(500).json({ success: false, message: 'Something went wrong' });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => console.log(`QuizMaster API listening on port ${port}`));
  } catch (error) {
    console.error('Unable to start server:', error.message);
    process.exit(1);
  }
}

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  startServer();
}

export default app;
