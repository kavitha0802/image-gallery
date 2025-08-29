import React from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-6 bg-blue-600 text-white font-bold text-2xl">
        Image Gallery
      </header>
      <Gallery />
    </div>
  );
}

export default App;
