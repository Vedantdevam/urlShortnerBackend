import express from 'express';
import { shortenUrl, redirectUrl } from '../controllers/urlController.js';
import { protect } from './middleware/authMiddleware.js';

const router = express.Router();

router.post('/shorten', protect , shortenUrl);
router.get('/:code', redirectUrl);

export default router;
