import Url from '../models/url.js';
import { generateShortId } from '../utils/generateShortId.js';

export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  try {
    // If URL already exists, return it
    let url = await Url.findOne({ longUrl });
    if (url) return res.json(url);

    // Create a new short code
    const shortCode = generateShortId(7);
    const shortUrl = `${baseUrl}/api/url/${shortCode}`;

    url = new Url({ longUrl, shortCode ,user: req.user._id });
    await url.save();

    res.json({ shortUrl, longUrl });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const shortCode = req.params.code;
    const url = await Url.findOne({ shortCode });

    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
