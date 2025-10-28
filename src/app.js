import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { protect } from './middleware/authMiddleware.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);       // Register & Login
app.use('/api/url', protect, urlRoutes); // Protected URL routes

export default app;
