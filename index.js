const express = require('express');
const generateDeveloperToken = require('./generateToken');
const app = express();

app.use((req, res, next) => {
    const apiKeyHeader = req.headers['authorization'];
    
    if (apiKeyHeader && apiKeyHeader === process.env.API_KEY) { // Get API key from environment variable
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.get('/token', (req, res) => {
    const token = generateDeveloperToken();
    res.send(token);
});

app.listen(3100, () => console.log('Server listening on port 3100!'));
