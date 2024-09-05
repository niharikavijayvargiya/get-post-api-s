const { fetchJokeFromApi, getRandomJokeFromArray: getJokeFromArrayModel } = require('../models/jokeModel');

// Controller function for fetching a random joke from the API
const getRandomJokeFromApi = async (req, res) => {
  const jokeData = await fetchJokeFromApi();
  if (jokeData) {
    res.json(jokeData);
  } else {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
};

// Controller function for fetching a random joke from the local array
const getRandomJokeFromArray = (req, res) => {
  const joke = getJokeFromArrayModel();
  res.json({ joke });
};

module.exports = { getRandomJokeFromApi, getRandomJokeFromArray };
