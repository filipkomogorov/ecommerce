import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../data/NavDirectory";
import { Category } from "../data/NavDirectory";
import { NavDirectory } from "../data/NavDirectory";
import "./styles.css";

const Dropdowns = () => {
  const [category, setCategory] = useState<string>("");
  const handleProductClick = (product: string) => {
    setCategory(product);
  };

  return (
    <Dropdown className="d-flex flex-row">
      {navigation.map((item: NavDirectory) => (
        <DropdownButton
          className="nav-dropdown-btn"
          id={item.title === "Sale" ? "sale" : ""}
          title={item.title}
          key={item.id}
        >
          {item.directories.map((i: Category) => (
            <DropdownItem
              onClick={() => handleProductClick(i.directory)}
              key={i.id}
              as={Link}
              to={i.path}
            >
              {i.directory}
            </DropdownItem>
          ))}
        </DropdownButton>
      ))}
    </Dropdown>
  );
};

export default Dropdowns;
