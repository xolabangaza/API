const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoutes')

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
    useNewUrlParser: true,
});

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})