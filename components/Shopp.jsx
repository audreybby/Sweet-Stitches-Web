// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import bgImage from "../assets/bg.jpg"; // Pastikan path ke file benar
import product1 from "../assets/cro.jpg"; // Gambar produk pertama
import product2 from "../assets/coo.jpg"; // Gambar produk kedua

const Shopp = () => {
  const navigate = useNavigate(); // Untuk melakukan navigasi ke halaman lain

  // Fungsi untuk menangani klik kategori
  const handleCategoryClick = (category) => {
    if (category === "crochet") {
      navigate("/cr"); // Menuju halaman Crochet
    } else if (category === "cake") {
      navigate("/ck"); // Menuju halaman Cake
    }
  };

  // Automatically navigate to "/cr" on desktop screens
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        navigate("/cr"); // Navigate to Crochet page automatically
      }
    };

    // Check immediately on mount
    checkScreenSize();

    // Optional: Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up listener
    };
  }, [navigate]);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen w-full flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay putih dengan opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-600 opacity-20 z-10"></div>

        {/* Efek shadow putih dari bawah ke atas */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-15"></div>

        {/* Text "Sweet Stitches" */}
        <h2
          className="text-6xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-[10rem] text-white z-20 text-center px-4"
          style={{ fontFamily: "'Quintessential', cursive" }}
        >
          <span className="block sm:inline">Shop</span>
        </h2>
      </section>

      {/* Category Section */}
      <div className="flex justify-center gap-8 mt-12">
        {/* Gambar untuk kategori Crochet */}
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("crochet")}
        >
          <img
            src={product1}
            alt="Crochet"
            className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <p className="text-center text-gray-600 text-lg mt-2 font-bold">Crochet</p>
        </div>

        {/* Gambar untuk kategori Cake */}
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("cake")}
        >
          <img
            src={product2}
            alt="Cake"
            className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <p className="text-center text-gray-600 text-lg mt-2 font-bold">Cake</p>
        </div>
      </div>

      {/* Gallery Images Section */}
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        {/* Tambahkan gambar jika diperlukan */}
      </div>
    </div>
  );
};

export default Shopp;
