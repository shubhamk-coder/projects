import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product(props) {
  const { item } = props;
  return (
    <Card key={item.Handle}>
      <Link to={`/product/${item.Handle}`}>
        <img src={item.Imgsrc} className="card-img-top" alt={item.Title} />
      </Link>
      <Card.Body>
        <Link to={`/product/${item.Handle}`}>
          <Card.Title>{item.Title}</Card.Title>
        </Link>
        <Card.Text>${item.Price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
