

# Jeopardy Game Backend

This is the backend for the Jeopardy game application. It serves as the API that handles CRUD operations for the game's questions, allows teams to score points, and provides data for the frontend to display.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)
5. [Running the Application](#running-the-application)
6. [Seeding the Database](#seeding-the-database)
---

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database for storing questions and game data.
- **Mongoose**: ODM for MongoDB to simplify interactions with the database.
- **dotenv**: To manage environment variables.

---

## Installation

To get the backend up and running, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/Farhan452002/Ahmed_Farhan_Capstone_Backend
cd your-repository-folder
```

2. **Install dependencies**:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

- `MONGO_URI`: Your MongoDB connection string. Replace `your-mongodb-connection-string` with the actual URI of your MongoDB database.
- `PORT`: Port number to run the server. The default value is `5000`.

---

## API Endpoints

### `GET /questions`

Fetches all the questions stored in the database.

**Response:**

```json
[
    {
        "category": "Islamic History",
        "question": "Name the 4 Caliphs after the Prophet Mohammad (S.A.W)",
        "answer": "Abu Bakr As-Siddiq (R.A), Omar ibn Al-Khattab (R.A), Uthman ibn Al-Affan (R.A), Ali ibn Abi-Talib (R.A)",
        "points": 100
    },
    ...
]
```

### `POST /questions`

Adds a new question to the database.

**Request Body:**

```json
{
    "category": "Islamic History",
    "question": "Who was the first caliph after the Prophet Mohammad (S.A.W)?",
    "answer": "Abu Bakr As-Siddiq (R.A)",
    "points": 200
}
```

**Response:**

```json
{
    "message": "Question added successfully"
}
```

### `PUT /questions/:id`

Updates an existing question.

**Request Body:**

```json
{
    "category": "Islamic History",
    "question": "Who was the second caliph after the Prophet Mohammad (S.A.W)?",
    "answer": "Omar ibn Al-Khattab (R.A)",
    "points": 200
}
```

**Response:**

```json
{
    "message": "Question updated successfully"
}
```

### `DELETE /questions/:id`

Deletes a specific question by its `id`.

**Response:**

```json
{
    "message": "Question deleted successfully"
}
```

---

## Running the Application

1. **Start the server**:

```bash
npm start
```

By default, the application will run on port `5000`. If you wish to run it on a different port, change the `PORT` variable in the `.env` file.

2. **Access the API**:

Once the server is running, you can access the API at:

```
http://localhost:5000
```

You can test the endpoints using Postman or any other API testing tool.

---

## Seeding the Database

To seed some default questions into the database, you can run the following command:

```bash
node seed/seed.js
```

This will insert default questions into the database. If there are already questions in the database, the script will not overwrite them.

---
