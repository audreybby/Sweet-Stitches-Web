// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../assets/1.jpg"; // Gambar pertama
import img2 from "../assets/2.jpg"; // Gambar kedua
import img3 from "../assets/3.jpg"; // Gambar ketiga
import img4 from "../assets/4.jpg"; // Gambar keempat
import img5 from "../assets/5.jpg"; // Gambar kelima
import img6 from "../assets/6.jpg"; // Gambar keenam
import img7 from "../assets/7.jpg"; // Gambar pertama
import img8 from "../assets/8.jpg"; // Gambar kedua
import img9 from "../assets/1.jpg"; // Gambar kedua

const Gallery = () => {
  // Daftar gambar dengan nama produk, harga, dan rating
  const images = [
    { src: img1, alt: "Image 1", name: "Product 1", price: "Rp.100.000,00", rating: 5 },
    { src: img2, alt: "Image 2", name: "Product 2", price: "Rp.100.000,00", rating: 4 },
    { src: img3, alt: "Image 3", name: "Product 3", price: "Rp.100.000,00", rating: 3 },
    { src: img4, alt: "Image 4", name: "Product 4", price: "Rp.100.000,00", rating: 5 },
    { src: img5, alt: "Image 5", name: "Product 5", price: "Rp.100.000,00", rating: 4 },
    { src: img6, alt: "Image 6", name: "Product 6", price: "Rp.100.000,00", rating: 5 },
    { src: img7, alt: "Image 4", name: "Product 4", price: "Rp.100.000,00", rating: 5 },
    { src: img8, alt: "Image 4", name: "Product 4", price: "Rp.100.000,00", rating: 5 },
    { src: img9, alt: "Image 4", name: "Product 4", price: "Rp.100.000,00", rating: 5 },
  ];

  return (
    <div>
      {/* Title above the Gallery */}
      <div className="text-center py-6">
        <h2
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#c87878]"
          style={{ fontFamily: "'Quintessential', cursive" }}
        >
          Gallery Of Latest Product
        </h2>
      </div>

      {/* Gallery Images Section */}
      <div className="p-6 bg-white">
        {/* Masonry Layout */}
        <div
          className="columns-2 sm:columns-3 lg:columns-3 gap-0"
          style={{ columnGap: "0px" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid px-4 relative"
            >
              <div className="relative group">
                {/* Image with overlay */}
                <img
                  src={image.src}
                  alt={image.alt || `Image ${index}`}
                  className="w-full h-auto object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white opacity-5 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>

                {/* Box with product name, price, and rating */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-full">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Product Name */}
                    <h3 className="text-sm sm:text-lg font-semibold text-[#333] truncate">{image.name}</h3>

                    {/* Product Price */}
                    <p className="text-xs sm:text-sm text-[#c87878]">{image.price}</p>
                  </div>

                  {/* 5-star Rating */}
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < image.rating ? "#FFD700" : "#e4e5e9"}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="mr-1"
                      >
                        <path d="M12 2l2.4 7.4h7.6l-6 4.8 2.4 7.4-6-4.8-6 4.8 2.4-7.4-6-4.8h7.6z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
