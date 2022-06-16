import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import { CartState } from "../context/Context";
import { Item } from "../data/Products";

import "./styles.css";
const Home = () => {
  const {
    state: { products },
  } = CartState();

  const [newCollection, setNewCollection] = useState<Item[]>([]);
  const [menCollection, setMenCollection] = useState<Item[]>([]);
  const [womenCollection, setWomenCollection] = useState<Item[]>([]);
  let newCollArray: Item[] = [];
  let menCollArray: Item[] = [];
  let womenCollArray: Item[] = [];
  useEffect(() => {
    products.forEach((product: Item) => {
      if (product.newCollection) {
        newCollArray.push(product);
      } else if (product.category.includes("men") && !product.newCollection) {
        menCollArray.push(product);
      } else if (product.category.includes("women") && !product.newCollection) {
        womenCollArray.push(product);
      }
      setNewCollection(newCollArray);
      setMenCollection(menCollArray);
      setWomenCollection(womenCollArray);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="subtitle">
          <Link to="/newarrivals">Browse New Arrivals</Link>
        </div>
        <Slider category={"newarrivals"} products={newCollection} />
      </div>
      <div>
        <div className="subtitle">
          <Link to="/women">Browse women collection</Link>
        </div>
        <Slider category={"women"} products={womenCollection} />
      </div>
      <div>
        <div className="subtitle">
          <Link to="/men">Browse men collection</Link>
        </div>
        <Slider category={"men"} products={menCollection} />
      </div>
    </div>
  );
};

export default Home;
