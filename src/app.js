import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { protect } from './middleware/authMiddleware.js';
import cors from 'cors';

app.use(cors({
  origin: [
    'http://localhost:3000',        // for local development
    'https://your-frontend-domain.com' // for when you deploy frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Server is running successfully on Railway!');
});
app.use('/api/auth', authRoutes);       // Register & Login
app.use('/api/url', protect, urlRoutes); // Protected URL routes



export default app;
