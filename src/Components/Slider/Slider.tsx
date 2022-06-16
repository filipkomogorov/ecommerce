import React, { useState } from "react";
import { Item } from "../../data/Products";
import CollectionLink from "./CollectionLink";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./sliderstyles.css";
import SingleProductCard from "./SingleProductCard";

const Slider = ({
  products,
  category,
}: {
  products: Item[];
  category: string;
}) => {
  let counter = -1;
  const [slider, setSlider] = useState(0);
  const [slideLeft, setSlideLeft] = useState(0);

  const scrollLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (slider < 0) {
      setSlideLeft(slider + 250);
      setSlider(slider + 250);
    }
  };

  const scrollRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (slider > -501) {
      setSlideLeft(slider - 250);
      setSlider(slider - 250);
    } else {
    }
  };

  return (
    <div className="slider__wrapper">
      <div className="slider__container">
        <div className="arrow leftArrow" onClick={(e) => scrollLeft(e)}>
          <BsChevronLeft size={32} />
        </div>
        <div
          className="slider__caurosel"
          id="caurosel"
          style={{ left: slideLeft + "px" }}
        >
          {products.map((product: Item) => {
            if (counter < 5) {
              counter++;
              return (
                <SingleProductCard
                  key={product.id}
                  product={product}
                  counter={counter}
                />
              );
            } else {
              return (
                <CollectionLink
                  key={product.id}
                  product={product}
                  counter={counter}
                  path={category}
                />
              );
            }
          })}
        </div>
        <div className="arrow rightArrow" onClick={(e) => scrollRight(e)}>
          <BsChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
