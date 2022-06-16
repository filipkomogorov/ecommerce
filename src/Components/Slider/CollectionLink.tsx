import { Link } from "react-router-dom";
import { Item } from "../../data/Products";
import "./sliderstyles.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const CollectionLink = ({
  product,
  counter,
  path,
}: {
  product: Item;
  counter: number;
  path: string;
}) => {
  const style = {
    left: `${(counter + 1) * 250}px`,
  };

  return (
    <Link
      to={`/${path}`}
      style={style}
      className="singleProduct categoryAnchor"
    >
      <span>
        View all products{" "}
        <span>
          <AiOutlineArrowRight />
        </span>
      </span>
    </Link>
  );
};

export default CollectionLink;
