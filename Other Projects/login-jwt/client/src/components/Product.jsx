import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product(props) {
  const { item } = props;

  return (
    <Card key={item.id} className="card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
