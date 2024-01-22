const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./db');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use book routes
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
	res.send('Hello, Node.js!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
