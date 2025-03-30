const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let fruits = [];

app.post('/add-fruit', (req, res) => {
    const { fruit } = req.body;
    if (fruit) {
        fruits.push(fruit);
        console.log('Fruits List:', fruits);
        res.json({ fruits });
    } else {
        res.status(400).json({ error: 'Fruit name is required' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});