const express = require('express');
const app = express();
const port = 5500;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Holy Crap, Batman!!');
});

app.listen(5500, () => {
    console.log(`Server is running on port ${port}`);
});