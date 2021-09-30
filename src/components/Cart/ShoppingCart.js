// import classes from "./Cart.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function ShoppingCart() {
  let history = useHistory();

  const cartItems = [
    {
      image: "test.image",
      price: "123.00",
      description: "sample description",
      quantity: "1",
    },
    {
      image: "test.image",
      price: "125.00",
      description: "sample description 2",
      quantity: "4",
    },
  ];

  const confirmHandler = () => {
    history.push("/complete");
  };
  const buttonHandler = () => {
    history.push("/products");
  };
  return (
    <Form>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => {
        return (
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src={item.image} />
            <Card.Body>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <div>
      <div style={{ margin: "10px" }}>
        <Button Variant="Primary" onClick={buttonHandler}>
          Back to Product Page
        </Button>
      </div>
      <div style={{ margin: "10px" }}>
        <Button Variant="Primary" onClick={confirmHandler}>
          Confirm Order
        </Button>
      </div>
      </div>
    </Form>
  );
}

export default ShoppingCart;
