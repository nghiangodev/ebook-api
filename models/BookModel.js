const db = require('../db')
class Book {
	static getAll() {
		return db.any('SELECT * FROM books');
	}

	static getById(id) {
		return db.one('SELECT * FROM books WHERE id = $1', [id]);
	}

	static create(title, author, publicationYear) {
		return db.one(
			'INSERT INTO books(title, author, publication_year) VALUES($1, $2, $3) RETURNING *',
			[title, author, publicationYear]
		);
	}

	static update(id, title, author, publicationYear) {
		return db.one(
			'UPDATE books SET title = $2, author = $3, publication_year = $4 WHERE id = $1 RETURNING *',
			[id, title, author, publicationYear]
		);
	}

	static delete(id) {
		return db.none('DELETE FROM books WHERE id = $1', [id]);
	}
}

module.exports = Book;