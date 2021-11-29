import React from "react";
import axios from "axios";

function ItemCard(props) {
  const handleAdd = (event) => {
    const { id, name, description, price } = props;
    event.preventDefault();
    axios
      .post(`http://localhost:3001/api/products/add-to-cart`, {
        id,
        name,
        description,
        price,
      })
      .then((response) => {
        props.updateTotalPrice(response.data.totalPriceWithTax);
      });
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-header fs-6 fw-bold">{props.itemName}</div>
        <img
          src={props.imgSrc}
          className="card-img-top card-img"
          alt={props.itemName}
        />
        <div className="card-body">
          <div className="card-text fw-bold fs-3">$ {props.price}</div>
          <p className="fw-lighter">{props.description}</p>
        </div>
        <div className="card-footer">
          <button onClick={handleAdd} type="button" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
