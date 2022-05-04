import TopBar from "./TopBar";
import { navigation } from "../data/NavigationSeeds";
import { NavigationSeeds } from "../data/NavigationSeeds";
import Dropdowns from "./Dropdowns";
import { Container, Navbar, FormControl } from "react-bootstrap";
import { styled } from "@mui/system";

const StyledNavbar = styled(
  Navbar,
  {}
)({
  background: "",
  flexDirection: "column",
  margin: 0,
  padding: 0,
});

const nav: NavigationSeeds = navigation;

const Header = () => {
  return (
    <StyledNavbar style={{ height: 80 }}>
      <TopBar />
      <Container>
        <Navbar.Brand>
          <a href="/">ShopLogo</a>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            className="m-auto"
            style={{ width: 500 }}
            placeholder="Search"
          />
        </Navbar.Text>
        <Dropdowns />
      </Container>
    </StyledNavbar>
  );
};

export default Header;
