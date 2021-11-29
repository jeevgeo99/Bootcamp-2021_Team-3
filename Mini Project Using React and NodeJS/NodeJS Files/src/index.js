const express = require('express');
const cors = require('cors');
const productRouter = require('./routes');

const port = 3001;

const shoppingApp = express();

shoppingApp.use(cors());
shoppingApp.use(express.json());

shoppingApp.use('/api/products', productRouter);

shoppingApp.listen(
	port,
	() => console.log(`App listening at http://localhost:${port}`)
);
