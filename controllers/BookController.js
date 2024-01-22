const Book = require('../models/BookModel');

exports.getAllBooks = async (req, res) => {
	try {
		const books = await Book.getAll();
		res.json(books);
	} catch (error) {
		console.error('Error fetching books:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

exports.getBookById = async (req, res) => {
	try {
		const book = await Book.getById(req.params.id);
		res.json(book);
	} catch (error) {
		console.error('Error fetching book:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

exports.createBook = async (req, res) => {
	const { title, author, publicationYear } = req.body;
	try {
		const newBook = await Book.create(title, author, publicationYear);
		res.status(201).json(newBook);
	} catch (error) {
		console.error('Error creating book:', error);
		res.status(400).json({ message: 'Bad Request' });
	}
};

exports.updateBook = async (req, res) => {
	const { title, author, publicationYear } = req.body;
	try {
		const updatedBook = await Book.update(req.params.id, title, author, publicationYear);
		res.json(updatedBook);
	} catch (error) {
		console.error('Error updating book:', error);
		res.status(400).json({ message: 'Bad Request' });
	}
};

exports.deleteBook = async (req, res) => {
	try {
		await Book.delete(req.params.id);
		res.status(204).end();
	} catch (error) {
		console.error('Error deleting book:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};