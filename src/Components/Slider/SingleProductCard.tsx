import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Item } from "../../data/Products";
import Rating from "../Rating";
import { CartState } from "../../context/Context";

import "./styles.css";

const Cards = ({ product, counter }: { product: Item; counter: number }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const style = {
    left: `${counter * 250}px`,
  };

  return (
    <Link
      to={`${product.mainCategory}/${product.id}`}
      className="singleProduct"
      style={style}
    >
      <Card style={{ height: "415px" }}>
        <Card.Img variant="top" src={product.image[0]} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <Rating rating={product.rating} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Cards;
