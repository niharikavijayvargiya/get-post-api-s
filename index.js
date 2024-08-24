const express = require('express');
const axios = require('axios');


// Create a new express app instance
const app = express();

app.use(express.json());

// Start the server on the specified port
app.listen(8080, function () {
  console.log('Server started on port 8080');
});




app.get('/random/joke', async function (req, res) {
const getRandomJoke = {
  joke1: 'Niharika is vey ugly',
  joke2: 'Niharika is very cute',
  joke3: 'Niharika is very smart',
  joke4: 'Niharika is very funny',
  joke5: 'Niharika is very funny',
};
  console.log(getRandomJoke);
  res.json(getRandomJoke);
});



app.post('/random/joke', async function (req, res) {
  console.log(req.body);
  const updatedResponseJson = {
    joke1: req.body.joke1 + ' updated',
    joke2: req.body.joke2 + ' updated',
    joke3: req.body.joke3 + ' updated',
    joke4: req.body.joke4 + ' updated',
    joke5: req.body.joke5 + ' updated',
  }
  res.json(updatedResponseJson);

});

app.post('/sum', async function (req, res) {
  console.log(req);
  console.log(req.body);
  
  if(req.body.nums && Array.isArray(req.body.nums)){
    const sumArray = req.body.nums
    var addition = 0;
    for (let num of sumArray) {
        addition += num;
    }
  } else {
    res.status(400).json({error: "tune chutiye galat request di hai"})
  }

  const ansJsonObject = {
    sum: addition
  }
  res.json(ansJsonObject);
});









app.post('/multiply', function(req, res) {
  console.log(req.body);
  // Initialize multiplication result to 1 (neutral element for multiplication)
  let multiplication = 1;
  // Check if 'nums' array is present in the request body
  if (req.body.nums && Array.isArray(req.body.nums)) {
      for (let num of req.body.nums) {
          multiplication *= num; // Multiply each number
          multiplication = multiplication * num; //120
      }
  } else {
      return res.status(400).json({ error: 'Please provide an array of numbers in the request body.' });
  }
  const ans = {
      multiply: multiplication,
  };
  console.log(ans);
  res.json(ans);
});





const People = {
  Niharika: {
    name: 'Niharika',
    age: 21,
    country: 'India',
    city: 'Hyderabad',
    skills: ['java', 'python', 'c++'],
    isMarried: false
  },
  Nikita: {
    name: 'Nikita',
    age: 21,
    country: 'India',
    city: 'Hyderabad',
    skills: ['java', 'python', 'c++'],
    isMarried: false
  },
  Aman: {
    name: 'Aman',
    age: 30,
    country: 'India',
    city: 'Delhi',
    skills: ['javascript', 'node.js', 'react'],
    isMarried: true
  },
  Priya: {
    name: 'Priya',
    age: 25,
    country: 'India',
    city: 'Mumbai',
    skills: ['html', 'css', 'design'],
    isMarried: false
  }
};


app.get('/user/info', function (req, res) {
  const name = req.query.name; // Get the name from the query parameter
  if(name == null) {
  res.json(People);
  } else if (People[name]) {
    res.json(People[name]); // Respond with the person's data if found
  } else {
    res.status(404).json({ error: 'Person not found' }); // Respond with an error if not found
  }
});















// // Define a route for "/print"
// app.get("/print", function (req, res) {
//   res.send("Hello World!");
// });

// // Helper function to fetch a random joke
// async function helper() {
//   try {
//     const response = await axios.get("https://icanhazdadjoke.com/", {
//       headers: {
//         "Accept": "application/json"
//       }
//     });
//     return response.data; // Return the data object containing the joke
//   } catch (error) {
//     console.error("Error fetching joke:", error);
//     return null; // Return null if there's an error
//   }
// }

// // Define a route for "/random-joke" that returns a random joke
// app.get("/random-joke", async function (req, res) {
//   const jokeData = await helper(); // Wait for the helper function to complete
//   if (jokeData) {
//     res.json(jokeData); // Send the joke as a JSON response
//   } else {
//     res.status(500).json({ error: 'Failed to fetch joke' }); // Send an error response if the joke couldn't be fetched
//   }
// });



