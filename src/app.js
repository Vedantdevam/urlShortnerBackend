import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';

import cors from 'cors';

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',        // for local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Server is running successfully on Railway!');
});
app.use('/api/auth', authRoutes);       // Register & Login
app.use('/api/url', urlRoutes); // Protected URL routes



export default app;
