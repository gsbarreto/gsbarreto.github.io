import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <MainContent>
      <ContainerStl>
        <Logo href="#">
          <b>G</b>abriel <b>B</b>arreto
        </Logo>
        <Menu>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Portfolio</a>
          <span>|</span>
          <a href="https://github.com/gsbarreto" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gsbarreto/" target="_blank">
            <FaLinkedin />
          </a>
        </Menu>
      </ContainerStl>
    </MainContent>
  );
}

const MainContent = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  z-index: 100;
  padding: 20px 0px;
  width: 100%;
`;

const ContainerStl = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.2rem;
  text-decoration: none;
  b {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-right: 1rem;

    & > svg {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  span {
    margin-right: 1rem;
  }
`;
