const { fetchRandomImage } = require('../models/imageModel');

const getRandomImage = async (req, res) => {
  const imageUrl = await fetchRandomImage();
  if (imageUrl) {
    res.json({ message: 'Random Image Generated', imageUrl });
  } else {
    res.status(500).json({ error: 'Unable to fetch image' });
  }
};

module.exports = { getRandomImage };
