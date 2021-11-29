class ShoppingCartUI {
	constructor() {
		this.getAllProducts();
		this.updateCartText('No Items');
	}

	updateCartText(userCart) {
	 	const carTextDiv = document.getElementById('cart-text');

	 	if (userCart.items && userCart.items.length) {
	 		carTextDiv.innerHTML = `
	             ${userCart.items.length} Items
	             <strong>₹${userCart.totalPriceWithTax}</strong>
	         `;
	 		return;
	 	}

	 	carTextDiv.innerHTML = `Cart Empty`;
	}

	async getAllProducts() {
		const grocery = await (
			await fetch('http://localhost:3000/api/products')
		).json();
		const shoppingList = document.getElementById('shopping-list');

		console.log('grocery', grocery.products);

		// this.updateCartText(grocery.userCart);

		grocery.products.forEach((product) => {
			shoppingList.innerHTML += `
           <div class="col">
                <div class="card">
                    <div class="card-header fs-6 fw-bold">${product.name}</div>
                    <img src="./images/${
											product.image
										}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <div class="card-text fw-bold fs-3">
                            ₹${product.price}
                        </div>
                        <p class="fw-lighter">${product.description}</p>
                    </div>
                    <div class="card-footer">
                        <button type="button" 
                                onclick='shoppingCart.addItemToCart(${JSON.stringify(
																	product
																)})'
                                class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
           `;
		});
	}

	async addItemToCart(product) {
		(
			await fetch('http://localhost:3000/api/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			})
		)
			.json()
			.then((userCart) => {
				this.updateCartText(userCart);
			});
	}
}

const shoppingCart = new ShoppingCartUI();
