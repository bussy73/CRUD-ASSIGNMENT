const express = require('express');
const connectDB = require("./db/database.js");
const officerRoutes = require('./routes/officerRoutes');
require('dotenv').config();
const { PORT } = process.env.PORT;


connectDB();

const app = express();

app.use(express.json());

app.use(officerRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Adebusola world' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
