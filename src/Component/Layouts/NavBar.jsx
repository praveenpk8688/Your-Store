import React, { useEffect, useState } from "react";
import "../../Assets/styles/NavBar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import PersonIcon from "@mui/icons-material/Person";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Dropdown, Space } from "antd";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const items = [
  {
    key: "1",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="catagories_link"
        style={{ fontWeight: "500", color: "#000" }}
      >
        T-Shirts
      </a>
    ),
  },
  {
    key: "2",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="catagories_link "
        style={{ fontWeight: "500", color: "#000" }}
      >
        Shirts
      </a>
    ),
  },
  {
    key: "3",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="catagories_link"
        style={{ fontWeight: "500", color: "#000" }}
      >
        Trousers
      </a>
    ),
  },
  {
    key: "4",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="catagories_link"
        style={{ fontWeight: "500", color: "#000" }}
      >
        Jeans
      </a>
    ),
  },
  {
    key: "5",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="catagories_link"
        style={{ fontWeight: "500", color: "#000" }}
      >
        Hoddies
      </a>
    ),
  },
];

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -8,
    top: 1,
    // border: "2px solid white",
    padding: "3px 5px",
    fontSize: "1.6rem",
    fontWeight: "bolder",
    fontFamily: "'Sour Gummy', sans-serif",
    borderRadius: "50%",
    color: "#b40a0a",
  },
});

const NavBar = () => {
  const [navbarTop, setNavbarTop] = useState("0");
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setNavbarTop("-80px");
      } else {
        setNavbarTop("0");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={`navBar `}
        style={{
          top: navbarTop,
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          transition: "top 0.3s ease-in-out",
          backgroundColor: "#fff0",
        }}
      >
        <Container fluid className="navBar1">
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Brand className="mx-auto ps-4" href="/">
            <img src="/images/main_logo.png" alt="" width={126} />
          </Navbar.Brand>

          <div className="d-flex align-items-center ms-auto d-lg-none gap-3">
            <IconButton>
              <PersonIcon className="person_icon" />
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4}>
                <ShoppingCartIcon className="cart_icon" />
              </StyledBadge>
            </IconButton>
          </div>

          <Navbar.Collapse id="navbar-content" className="w-100">
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center w-100">
              <Nav className="gap-3 order-1 order-lg-0 nav_links">
                <Nav.Link href="#" className="nav_link_home">
                  HOME
                </Nav.Link>
                <Nav.Link href="#">SHOP</Nav.Link>
                <Dropdown menu={{ items }} className="catagories_dropdown ">
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      CATAGORIES
                      <KeyboardArrowDownOutlinedIcon />
                    </Space>
                  </a>
                </Dropdown>
                <Nav.Link href="#">COMBO</Nav.Link>
                <Nav.Link href="#">SPECIAL</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>

          <div className="d-none d-lg-flex gap-4 align-items-center order-2 me-5">
            <IconButton>
              <PersonIcon className="person_icon" />
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={5}
                color="black"
                className="cart_badge"
              >
                <ShoppingCartIcon className="cart_icon" />
              </StyledBadge>
            </IconButton>
          </div>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavBar;
