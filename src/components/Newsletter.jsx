import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
   
  ${TitleStyles};
  .container {
    background: #013220;
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 4rem 1.5rem 1rem;
      font-size: 1rem;
      &:focus {
        outline: none;
        
      }
        
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
