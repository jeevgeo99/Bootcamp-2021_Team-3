class Product {
	constructor(data) {
		this.data = data;
		this.taxPercentage = 18;
		this.userCart = [];
	}

	getProducts() {
		return this.data;
	}

	getCartItems() {
		return this.userCart;
	}

	getProduct(id) {
		return this.data.find(product => product.id === id);
	}

	addProductToCart(selectedProduct) {
		this.userCart.push(selectedProduct);
	}

	calculateTotalWithTax() {
		const itemsTotalPrice = this.userCart.reduce(function(prev, curr) {
			return prev + curr.price
		}, 0);
		const totalWithTax = itemsTotalPrice + 
							(itemsTotalPrice * (this.taxPercentage/100));
		
		return parseFloat(totalWithTax).toFixed(2);
	}
}

module.exports = Product;

