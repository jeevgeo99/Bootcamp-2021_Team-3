import ItemCard from  './ItemCard';
import './App.css';

import milk from './images/milk.jpeg';
import bread from './images/bread.jpeg';
import juice from './images/juice.jpeg';
import egg from './images/egg.jpeg';


const images = {
	milk,
	bread,
	juice,
	egg
};

function getImageByKey(key) {
	return images[key];
}

function App() {
	

  return (
    <div className="App">
      	<div className="container px-4 py-5" id="icon-grid">
		<div className="row g-0 header">
			<div className="col-11">
				<h2 className="fs-2 fw-bold">Grocery</h2>
			</div>
			<div id="cart" className="col">
				<span className="material-icons">
					shopping_cart
				</span>
				<div className="text" id="cart-text">
				
				
				</div>
			</div>
		</div>
		<hr/>
		<span className="divider"></span>
		<div className="row item-container" id="shopping-list">
			<ItemCard imgSrc={getImageByKey('milk')} itemName="Milk" price="$ 2.55"  description="1 Gallon of Whole Milk"/>
			<ItemCard imgSrc={getImageByKey('bread')} itemName="Bread" price="$ 1.76" description="1 Loaf of Sliced Bread"/>
			<ItemCard imgSrc={getImageByKey('juice')} itemName="Juice" price="$ 0.19" description="100% Tropicana Orange Juice"/>
			<ItemCard imgSrc={getImageByKey('egg')} itemName="Egg" price="$ 6.18"   description="A dozen of Organic Eggs"/>
		</div>
	</div>
  </div>
  );
}

export default App;
