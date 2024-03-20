require('dotenv').config();
console.log('test');
console.log(process.env);
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
    const { term, latitude, longitude } = req.query;
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&sort_by=distance&open_now=true&limit=5`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
    });

    const data = await response.json();
    res.json(data);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});