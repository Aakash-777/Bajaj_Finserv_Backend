const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Enable CORS for requests from http://localhost:3000 (your React app)
app.use(cors({ origin: 'https://bajaj-finserv-frontend-21-bai-10442-hoxi.vercel.app' }));

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowercase === null || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "Aakash_Bhowmick_16082003",
        email: "aakash.bhowmick2021@vitbhopal.ac.in",
        roll_number: "21BAI10442",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
