require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./src/configs/db');
const userRoutes = require('./src/routes/user');

const app = express();

connectToDatabase();

const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});