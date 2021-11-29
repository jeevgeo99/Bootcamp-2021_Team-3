function ItemCard(props) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-header fs-6 fw-bold">{props.itemName}</div>
                <img src={props.imgSrc} className="card-img-top" alt={props.itemName}/>
                <div className="card-body">
                    <div className="card-text fw-bold fs-3">
                        {props.price}
                    </div>
                    <p className="fw-lighter">{props.description}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;