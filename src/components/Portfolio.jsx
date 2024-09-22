import React from "react";
import styled from "styled-components";
import background from "../assets/portfolio.jpg";
export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="content">
        
        <h2>
        Family Feast is luscious restaurant & bar theme design coming from Themes Kingdom’s kitchen, made to serve the best chefs serving their best cuisines.
        </h2>
        <button>View More</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    h2 {
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 3rem;
      font-size: 1rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: black;
      text-transform: uppercase;
      &:hover {
        background: #013220;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;
