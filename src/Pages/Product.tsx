import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductLayout from "../Components/SingleProductLayout/SingleProductLayout";
import { CartState } from "../context/Context";
import { Item } from "../data/Products";

const Product = () => {
  const [chosenProduct, setChosenProduct] = useState<Item>();
  const params = useParams();
  const productid = params.product;

  const {
    state: { products },
  } = CartState();

  useEffect(() => {
    products.forEach((product: Item) => {
      if (productid === product.id) {
        setChosenProduct(product);
      }
    });
  }, []);

  return (
    <div>
      {chosenProduct && <SingleProductLayout product={chosenProduct} />}
    </div>
  );
};

export default Product;
