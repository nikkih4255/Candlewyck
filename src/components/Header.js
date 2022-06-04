import { useState } from "react";
import {
  Navbar,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import CandlewyckLogo from "../app/img/cw.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar light sticky="top" expand="md">
      <NavbarBrand className="ms-5" href=" /">
        <img
          src={CandlewyckLogo}
          alt="candlewyck logo"
          className="float-start CandlewyckLogo"
          height="70"
        />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <i className="fa fa-bed fa-lg" /> Accommodations
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <a className="dropdown-item" href="../Cabins">
                  Cabins
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../Houses">
                  Houses
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../Townhouses">
                  Townhouses
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../KingSuites">
                  King Suites
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../JuniorSuite">
                  Junior Suites
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../Hotel">
                  Hotel Rooms
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink className="nav-link" to="/amenities">
              <i className="fa fa-tv fa-lg" /> Amenities
            </NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <i className="fa fa-map fa-lg" /> Guest Info
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <a className="dropdown-item" href="../GuestInfo">
                  Guest Info
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../MapFAQ">
                  Resort Map and FAQ's
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <i className="fa fa-anchor fa-lg" /> Additional Services
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://h2osportsrental.com/"
                  target="_#"
                >
                  H2O Sports Rentals
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../Weddings">
                  Weddings
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="../GcMassage">
                  Golf Cart Rentals and Massages
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <i className="fa fa-star fa-lg" /> Nearby Attractions
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://lendonwood.com/"
                  target="_#"
                >
                  Lendonwood Gardens
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://har-bervillage.com/"
                  target="_#"
                >
                  Har-Ber Village
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://grandlakeliving.com/attractions/free-tours-of-historic-pensacola-dam/"
                  target="_#"
                >
                  Pensacola Dam Tours
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://www.grandlakecasino.com/"
                  target="_#"
                >
                  Grand Lake Casino
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://shopmuddypearl.com/"
                  target="_#"
                >
                  Muddy Pearl Boutique
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://www.patriciaisland.com/"
                  target="_#"
                >
                  Patricia Island Country Club
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  className="dropdown-item"
                  href="https://rocketskatingplus.com/"
                  target="_#"
                >
                  Rocket Skating Plus
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
      <Nav className="me-5">
        <a
          className="btn btn-primary text-nowrap"
          href="https://apps.gracesoft.com/PMS/EasyWebRez/roomdetails/306"
          target="_#"
        >
          Book Now
        </a>
      </Nav>
    </Navbar>
  );
};

export default Header;
