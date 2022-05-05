import TopBar from "./TopBar";
import Dropdowns from "./Dropdowns";
import {
  Container,
  Navbar,
  FormControl,
  Dropdown,
  Badge,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

const Header = () => {
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
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: 350 }} className="align-self-start">
              <span>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
