import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "$22.4/pcs",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "$5.5/pcs",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "$8/pcs",
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "$12.5/pcs",
    },
    {
        image: product5,
        name: "Chicken Burger",
        price: "$22.4/pcs",
      },
      {
        image: product6,
        name: "Toasted Bread",
        price: "$5.5/pcs",
      },
      {
        image: product7,
        name: "Egg Sandwich",
        price: "$8/pcs",
      },
  
      {
        image: product8,
        name: "Raspberry Cake",
        price: "$12.5/pcs",
      },
      {
        image: product1,
        name: "Chicken Burger",
        price: "$22.4/pcs",
      },
      {
        image: product2,
        name: "Toasted Bread",
        price: "$5.5/pcs",
      },
      {
        image: product3,
        name: "Egg Sandwich",
        price: "$8/pcs",
      },
  
      {
        image: product4,
        name: "Raspberry Cake",
        price: "$12.5/pcs",
      },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Menu</span> Family Feast
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: black;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 2rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 3rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: black;
        text-transform: uppercase;
        &:hover {
          background: #013220;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
