require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(PORT, () =>
            console.log(`Server is connected to DB and started on port ${PORT}`)
        );
    })
    .catch((err) => {
        console.log(err);
    });
