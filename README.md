# Random Image & Jokes API Project

This is a Node.js project that demonstrates the use of RESTful APIs to fetch random images from Unsplash, random jokes from a local array and an external API, and perform basic arithmetic operations via POST requests. The project uses the MVC (Model-View-Controller) design pattern.

## Features
- Fetch a random joke from the external API `icanhazdadjoke`.
- Fetch a random joke from a predefined local array.
- Fetch a random image from Unsplash.
- Perform sum and multiplication of an array of numbers.
- Provide user info from a mock data source.

## Project Structure
```
assignment_random_image_api/
├── app/
│   ├── controllers/       # Contains logic for handling requests
│   │   ├── jokeController.js
│   │   └── imageController.js
│   ├── models/            # Contains logic for interacting with data
│   │   ├── jokeModel.js
│   │   └── imageModel.js
│   ├── routes/            # Defines API endpoints
│   │   ├── jokeRoutes.js
│   │   └── imageRoutes.js
│   └── app.js             # Entry point of the application
├── config/
│   └── unsplashConfig.js   # Configuration for Unsplash API
├── node_modules/           # Project dependencies
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14+)
- npm (comes with Node.js)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/random-image-jokes-api.git
   cd random-image-jokes-api
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Create the Unsplash API Key:**
   - Sign up at [Unsplash Developers](https://unsplash.com/developers).
   - Create a new application to obtain the API key.

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the Unsplash API key to the `.env` file:
     ```bash
     UNSPLASH_ACCESS_KEY=your_unsplash_access_key
     ```

## Usage

1. **Start the server:**
   ```bash
   node app.js
   ```

2. The server will be running on `http://localhost:8080`.

## API Endpoints

### Joke Endpoints

#### Fetch a Random Joke from API
- **GET** `/random-joke-from-api`
- Returns a random joke fetched from the `icanhazdadjoke` API.
- Example Response:
  ```json
  {
    "id": "R7UfaahVfFd",
    "joke": "Why don't skeletons fight each other? They don't have the guts."
  }
  ```

#### Fetch a Random Joke from Array
- **GET** `/get/random-joke-from-array`
- Returns a random joke from a predefined local array.
- Example Response:
  ```json
  {
    "joke": "I'm reading a book on anti-gravity. It's impossible to put down!"
  }
  ```

### Image Endpoints

#### Fetch a Random Image from Unsplash
- **GET** `/random-image`
- Fetches a random image from Unsplash.
- Example Response:
  ```json
  {
    "message": "Random Image Generated",
    "imageUrl": "https://images.unsplash.com/photo-1602526211262-15c7b1eae599"
  }
  ```

### Arithmetic Endpoints

#### Perform Sum of Numbers
- **POST** `/sum`
- Example Request Body:
  ```json
  {
    "nums": [1, 2, 3, 4]
  }
  ```
- Example Response:
  ```json
  {
    "sum": 10
  }
  ```

#### Perform Multiplication of Numbers
- **POST** `/multiply`
- Example Request Body:
  ```json
  {
    "nums": [2, 3, 4]
  }
  ```
- Example Response:
  ```json
  {
    "multiply": 24
  }
  ```

### User Info Endpoint

#### Fetch User Info
- **GET** `/user/info`
- Fetches mock user info data. You can pass a `name` query parameter (e.g., `?name=Niharika`) to get details of a specific user.
- Example Response:
  ```json
  {
    "name": "Niharika",
    "age": 21,
    "country": "India",
    "city": "Hyderabad",
    "skills": ["java", "python", "c++"],
    "isMarried": false
  }
  ```

## Environment Variables
You will need to set the following environment variables to run the project:

- **UNSPLASH_ACCESS_KEY**: Your Unsplash API access key.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software.
