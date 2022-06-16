import TopBar from "./TopBar";
import Dropdowns from "./Dropdowns";
import {
  Container,
  Navbar,
  FormControl,
  Dropdown,
  Badge,
  Button,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { Item } from "../data/Products";
import { TiDeleteOutline } from "react-icons/ti";

import "./styles.css";

const StyledNavbar = styled(
  Navbar,
  {}
)({
  background: "",
  boxShadow: "0px 4px 4px -1px #494949",
  flexDirection: "column",
  margin: 0,
  padding: 0,
});

const style = {
  width: "350px",
  margin: "0 auto",
  height: "auto",
};

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <StyledNavbar style={{ height: 80 }}>
      <TopBar />
      <Container>
        <Navbar.Brand>
          <Link to="/">ShopLogo</Link>
        </Navbar.Brand>
        <Dropdowns />
        <Navbar.Text>
          <FormControl
            className="m-auto"
            style={{ width: 500 }}
            placeholder="Search"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle id="cart-btn">
              <FaShoppingCart size={32} />
              <Badge>{cart.length === 0 ? "" : cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={style} className="align-self-start">
              {cart.length > 0 ? (
                <>
                  {cart.map((item: Item, index: number) => (
                    <div className="cart-nav-item" key={index}>
                      <div className="cart-nav-item-image">
                        <img src={item.image[0]} alt={item.name} />
                      </div>
                      <div className="cart-nav-item-text">
                        <p>{item.name}</p>
                        <p>{item.price} EUR</p>
                        <p>Color: {item.color}</p>
                      </div>
                      <TiDeleteOutline
                        size={27}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      />
                    </div>
                  ))}
                  <hr />
                  <Link to="/checkout">
                    <Button>Proceed to checkout</Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
