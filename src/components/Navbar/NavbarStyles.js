import { Container } from "../../Globalstyles";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Nav = styled.nav`
  /* 50% transparent */
  font-size: 10px;
  height: 65px;
  position: absolute; /* Initially absolute */
  top: 0;
  animation: 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  width: 100%;
  border-radius: 9px;
  margin-top: 15px;

  /* Sticky behavior */
  &.sticky {
    position: sticky; /* Change to sticky when scrolled */
    margin-top: 15px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: auto;
  align-items: center;
  width: 97%;
  border-radius: 9px;
  height: 65px;
  background-color: #ebe9e9;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
  margin-top: 7px;
  z-index: 50;
`;

export const NavIcon = styled.img`
  width: 6rem;
  @media screen and (max-width: 960px) {
    margin-top: 18px;

    width: 3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: auto;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #4f4c4c;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  margin-top: 10px;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const Li = styled.li`
  display: inline-flex;
  list-style: none;
  margin: 0px auto 0;
  padding: 0;
  float: right;
  z-index: 7;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0px 0;
    padding: 0;
    float: center;
    z-index: 7;
  }
`;

export const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 0rem;
  height: 100%;

  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const Text = styled.h1`
  font-size: 13px;
  font-weight: 500;
  &:hover {
    color: #66a109;
    transition: all 0.3s ease;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
