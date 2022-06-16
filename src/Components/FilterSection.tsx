import { Form } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";
import Rating from "./Rating";

const FilterSection = () => {
  const [rating, setRating] = useState<number>(2);

  return (
    <div className="filterWrapper">
      <Form.Select>
        <option>Sort by</option>
        <option value="ascending">Lowest Price</option>
        <option value="descending">Highest Price</option>
        <option value="descending">Lowest Rating</option>
        <option value="descending">Highest Rating</option>
      </Form.Select>
      <Form.Check label="Only in stock" type="radio" />

      <Rating
        onClick={(index: number) => setRating(index + 1)}
        rating={rating}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default FilterSection;
