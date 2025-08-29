// src/components/Gallery.jsx

import p1 from "../assets/images/p1.webp";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.webp"; 
import p4 from "../assets/images/p4.jpg"; 
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg"; 
import p7 from "../assets/images/p7.jpg"; 
import p8 from "../assets/images/p8.jpg"; 

const images = [
  { src: p1, title: "Julie's Rabbit Ears" },
  { src: p2, title: "The Innocent Look" },
  { src: p3, title: "Big Eyed Buggy" },
  { src: p4, title: "The Saint Doggo" },
  { src: p5, title: "Playful Puppy" },
  { src: p6, title: "Happy Paws" },
  { src: p7, title: "Curious Pup" },
  { src: p8, title: "Fluffy Friend" },
];

export default function Gallery() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🐶 Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:scale-105 transition-transform"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-48 object-cover"
            />
            <p className="text-center text-gray-700 font-medium py-2">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
