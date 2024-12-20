// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import bgImage from "../assets/bgg.jpg";
import product1 from "../assets/coo.jpg";
import product2 from "../assets/coo.jpg";
import product3 from "../assets/cooo.jpg";
import product4 from "../assets/coo.jpg";
import product5 from "../assets/cooo.jpg";
import product6 from "../assets/coo.jpg";
import product7 from "../assets/cooo.jpg";
import product8 from "../assets/coo.jpg";
import leftArrow from "../assets/kirii.png";
import rightArrow from "../assets/kanann.png";

const Shop = () => {
  const products = [
    { id: 1, image: product1 },
    { id: 2, image: product2 },
    { id: 3, image: product3 },
    { id: 4, image: product4 },
    { id: 5, image: product5 },
    { id: 6, image: product6 },
    { id: 7, image: product7 },
    { id: 8, image: product8 },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextProducts = () => {
    if (startIndex < products.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevProducts = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const displayedProducts = products.slice(startIndex, startIndex + 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen w-full flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-pink-600 opacity-20 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-15"></div>
        <h2
          className="text-6xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-[10rem] text-white z-20 text-center px-4"
          style={{ fontFamily: "'Quintessential', cursive" }}
        >
          <span className="block sm:inline">Cake</span>
        </h2>
      </section>

      {/* Product Section */}
      <section id="shop" className="min-h-screen w-full bg-white py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#c87878] font-[Quintessential] mb-4">
            Products
          </h1>
        </div>

        <div className="container mx-auto px-4 mt-8">
          {/* Mobile Product Carousel */}
          <div className="sm:hidden flex gap-4 overflow-x-auto pb-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-72 h-96 bg-white rounded-lg p-4 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Desktop Product Carousel */}
          <div className="hidden sm:flex gap-8 items-center justify-center">
            <button
              onClick={prevProducts}
              className="hover:text-[#e85c5c] mr-4"
              disabled={startIndex === 0}
            >
              <img
                src={leftArrow}
                alt="Left Arrow"
                className="w-8 sm:w-12 h-8 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity opacity-50"
              />
            </button>

            {displayedProducts.map((product) => (
              <div key={product.id} className="w-72 h-96 bg-white rounded-lg p-4">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}

            <button
              onClick={nextProducts}
              className="hover:text-[#e85c5c] ml-4"
              disabled={startIndex >= products.length - 3}
            >
              <img
                src={rightArrow}
                alt="Right Arrow"
                className="w-8 sm:w-12 h-8 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity opacity-50"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
