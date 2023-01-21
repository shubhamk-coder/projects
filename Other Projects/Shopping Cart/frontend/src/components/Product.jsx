import React, { useContext } from "react";
import { Store } from "../Store";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Product(props) {
  const { item } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.Qty < quantity) {
      window.alert("sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <Card key={item.Handle} className="card">
      <Link to={`/product/${item.Handle}`}>
        <img src={item.Imgsrc} className="card-img-top" alt={item.Title} />
      </Link>
      <Card.Body>
        <Link to={`/product/${item.Handle}`}>
          <Card.Title>{item.Title}</Card.Title>
        </Link>
        <Card.Text>${item.Price}</Card.Text>
        {item.Qty === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(item)}>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
