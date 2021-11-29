import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import "./App.css";
import handleAdd from "./ItemCard";
import milk from "./images/milk.jpeg";
import bread from "./images/bread.jpeg";
import juice from "./images/juice.jpeg";
import egg from "./images/egg.jpeg";

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const images = {
    milk,
    bread,
    juice,
    egg,
  };

  // function getImageByKey(key) {
  //   return images[key];
  // }

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="App">
      <div className="container px-4 py-5" id="icon-grid">
        <div className="row g-0 header">
          <div className="col-11">
            <h2 className="fs-2 fw-bold">Grocery</h2>
            

            <div id="cart" className="col">
              <div className="fixed">
              <p>Total Price: ${totalPrice}</p>
              <span className="material-icons">shopping_cart</span>
              </div>
              <div className="text product-grid" id="cart-text">
                {products.length &&
                  products.map((product) => (
                    <div key={product.id}>
                      <ItemCard
                        id={product.id}
                        // imgSrc={getImageByKey(product.name.toLowerCase())}
                         imgSrc={images[product.name.toLowerCase()]}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        updateTotalPrice={setTotalPrice}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className="divider"></span>
        <div className="row item-container" id="shopping-list"></div>
      </div>
    </div>
  );
}

export default App;
