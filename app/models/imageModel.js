const {unsplash} = require('../../config/unsplashConfig');

// Fetch random image from Unsplash
const fetchRandomImage = async () => {
  try {
    const response = await unsplash.photos.getRandom();
    console.log(response)
    return response.response.urls.regular;
  } catch (error) {
    console.error('Error fetching random image:', error);
    return null;
  }
};

module.exports = { fetchRandomImage };
