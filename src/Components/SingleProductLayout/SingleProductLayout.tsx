import "./SingleProductLayout.css";
import { Item } from "../../data/Products";
import { useState } from "react";
import { CartState } from "../../context/Context";

const SingleProductLayout = ({ product }: { product: Item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [selectedImg, setSelectedImg] = useState<number>(0);
  console.log(cart);
  return (
    <div>
      <div className="product-title">
        <h1>{product.name}</h1>
      </div>
      <div className="product-chosen-image">
        <img src={product.image[selectedImg]} alt={product.name} />
      </div>
      <div className="product-image-gallery">
        {product.image.map((e, index) => {
          return (
            <img
              key={product.id + index}
              src={e}
              alt={product.name}
              onClick={() => setSelectedImg(index)}
            />
          );
        })}
      </div>
      <div className="btn-buy">
        <button
          disabled={!product.inStock}
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: product,
            });
          }}
        >
          {product.inStock ? "Add to Cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
};

export default SingleProductLayout;
