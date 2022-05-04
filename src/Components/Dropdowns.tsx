import { elementAcceptingRef } from "@mui/utils";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navigation } from "../data/NavigationSeeds";
import { NavigationSeeds } from "../data/NavigationSeeds";

const nav: NavigationSeeds = navigation;
const navigationMen: string[] = nav.Men;
const navigationWomen: string[] = nav.Women;
const navigationNew: string[] = nav.New;
const navigationOutlet: string[] = nav.Outlet;
const navigationSale: string[] = nav.Sale;

const Dropdowns = () => {
  return (
    <>
      <DropdownButton title="Men" id="dropdown-men" key="men">
        {navigationMen.map((el) => (
          <Dropdown.Item as={Link} to={`/${el}`}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton title="Women" id="dropdown-women" key="women">
        {navigationWomen.map((el) => (
          <Dropdown.Item as={Link} to={`/${el}`}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton title="New" id="dropdown-new" key="new">
        {navigationNew.map((el) => (
          <Dropdown.Item as={Link} to={`/${el}`}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton title="Outlet" id="dropdown-outlet" key="outlet">
        {navigationOutlet.map((el) => (
          <Dropdown.Item as={Link} to={`/${el}`}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton title="Sale" id="dropdown-Sale" key="Sale">
        {navigationSale.map((el) => (
          <Dropdown.Item as={Link} to={`/${el}`}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default Dropdowns;
