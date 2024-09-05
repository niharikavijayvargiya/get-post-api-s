const axios = require('axios');

// Fetch a random joke from the external API
const fetchJokeFromApi = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
};

// Fetch a random joke from the local array
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "I would tell you a joke about an elevator, but it's an uplifting experience.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm on a whiskey diet. I've lost three days already.",
    "I used to play piano by ear, but now I use my hands.",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
    "Why don't programmers like nature? It has too many bugs."
  ];

const getRandomJokeFromArray = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
};

module.exports = { fetchJokeFromApi, getRandomJokeFromArray };
