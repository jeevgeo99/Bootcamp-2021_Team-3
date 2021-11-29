const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Howareyou@17',
	database: 'jpr_cart',
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('db ' + connection.state);
});

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
	const query = `SELECT * FROM products;`;
	connection.query(query, (error, products) => {
		if (error) {
			res.status(500).json({
				error,
			});
		}
		res.status(200).json({
			products,
		});
	});
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);











/*
app.get('/api/products/:id', async (req, res) => {
	const productId = req.params.id;
	const query = `SELECT * FROM products WHERE id=${productId}`;
	connection.query(query, (error, products) => {
		if (error) {
			res.status(500).json({
				error,
			});
		}
		res.status(200).json({
			products,
		});
	});
});
*/
/*
app.post('/api/products', (req, res) => {
	const { name, description, image, price } = req.body;

	const query = `INSERT INTO products VALUES (4, '${name}', '${description}', '${image}', ${price});`;
	connection.query(query, (error, product) => {
		if (error) {
			res.status(500).json({
				error,
			});
		}
		res.status(200).json({
			product,
		});
	});
});
*/

