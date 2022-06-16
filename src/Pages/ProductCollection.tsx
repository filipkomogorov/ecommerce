import { useParams } from "react-router-dom";
import { CartState } from "../context/Context";
import { Item } from "../data/Products";

import "./styles.css";

import FilterSection from "../Components/FilterSection";

const ProductCollection = () => {
  const params = useParams();
  const productCategory = params.category;
  console.log(productCategory);

  const {
    state: { products },
  } = CartState();

  return (
    <div className="productColletionWrapper">
      <FilterSection />
      <div className="productCollection">
        <span>Product collection</span>
      </div>
    </div>
  );
};

export default ProductCollection;
