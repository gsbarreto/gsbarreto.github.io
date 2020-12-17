import React from "react";
import styled from "styled-components";
import Container from "../Container";

export default function Hero() {
  return (
    <MainContent>
      <ContainerHero>
        <Profile>
          <img src="/photo.jpg" alt="Gabriel Barreto's photo" />
        </Profile>
        <Description>
          <h1>Gabriel Barreto</h1>
          <p>
            Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit.
            Voluptates in aliquam <span>praesentium</span> sequi ducimus
            blanditiis fuga magnam nesciunt quos laudantium incidunt distinctio
            enim consequatur, eveniet porro excepturi ad. Repudiandae et
            deserunt, explicabo voluptates, ducimus quia corrupti, impedit aut
            nihil velit esse exercitationem? Explicabo nesciunt minus sint
            aliquam maxime adipisci! Reiciendis.
          </p>
        </Description>
      </ContainerHero>
      <Background />
    </MainContent>
  );
}

const MainContent = styled.section`
  height: calc(100vh);
  width: 100%;
  background: url("/background_hero.jpg") no-repeat #2d2d2d;
  background-size: cover;
  background-position: center;
`;

const ContainerHero = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  & > * {
    z-index: 2;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: grayscale(100%) blur(10px) brightness(50%);
`;

const Profile = styled.div`
  width: 30%;
  margin-right: 12rem;
  & > img {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
    filter: grayscale(100%);
    max-width: 100%;
  }
`;

const Description = styled.div`
  max-width: 40%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 400;

  & > h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.6rem;
    line-height: 0rem;
  }

  & > p {
    & > b {
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    & > span {
      padding: 0 0.3rem;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
