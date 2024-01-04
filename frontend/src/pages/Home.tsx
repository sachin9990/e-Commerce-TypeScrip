import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        {/* Check the className as I have put that in camelCase while in the video it is in all lower case */}
        <Link to="/search" className="findMore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asdfgh"
          photo="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jG+e7roXL._SX522_.jpg"
          name="MackBook"
          price={234}
          stock={18}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
}

export default Home;
