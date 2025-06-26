import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";    
import Modal from "./Modal";   

import project1 from "../../imgs/portfolio/poert1.png";
import project2 from "../../imgs/portfolio/port2.png";
import project3 from "../../imgs/portfolio/port3.png";
import project4 from "../../imgs/portfolio/poert1.png";
import project5 from "../../imgs/portfolio/port2.png";
import project6 from "../../imgs/portfolio/port3.png";

export default function Portfolio() {
  const imageList = [
    { id: 11, src: project1, alt: "Web 1" },
    { id: 22, src: project2, alt: "Mobile App 1" },
    { id: 33, src: project3, alt: "Mobile App 2" },
    { id: 44, src: project4, alt: "Web App 2" },
    { id: 55, src: project5, alt: "Web App 3" },
    { id: 66, src: project6, alt: "Web App 4" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const toggleModal = (src) => {
    setIsOpen(true);
    setSelectedImage(src);
  };

  return (
    <section className="min-h-screen bg-white py-10 flex justify-center items-center my-24">
      <div className="w-full max-w-6xl flex flex-col items-center text-center px-4">
        
        <h2 className="uppercase text-4xl font-extrabold tracking-wider mb-6 mt-7 text-[#2c3e50]">
          portfolio component
        </h2>

        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-1 bg-[#2c3e50] mx-4"></div>
          <i className="fa-solid fa-star text-[#2c3e50] text-xl"></i>
          <div className="w-16 h-1 bg-gray-800 mx-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
  {imageList.map((img) => (
    <PortfolioCard key={img.id} img={img} toggleModal={toggleModal} />
  ))}
</div>
        {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
      </div>
    </section>
  );
}
