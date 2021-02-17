import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import CustomButton from "../Button/index";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import LanguageIcon from "@material-ui/icons/Language";
import "./index.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Proyectos
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {/* <CustomButton text={"Cambiar idioma"} icon={<LanguageIcon />} /> */}
          <CustomButton
            text={"Cambiar color"}
            icon={<BrightnessMediumIcon />}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
