const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes for pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'about.html'));
});

app.get('/properties', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'properties.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'news.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});