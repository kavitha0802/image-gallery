const images = [
  { src: "https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "Julie's Rabbit Ears" },
  { src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "The Innocent Look" },
  { src: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "Big Eyed Buggy" },
  { src: "https://plus.unsplash.com/premium_photo-1707410048990-c9e0fb4e3956?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "The Saint Doggo" },
  { src: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "Big Eyed Buggy" },
  { src: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D", title: "The Innocent Look" },
  { src: "https://media.istockphoto.com/id/2194969276/photo/golden-retriever-puppy-running.webp?a=1&b=1&s=612x612&w=0&k=20&c=1LzYtJJ1ghdFiQ64z8b4Geeqg9U_zeHzsRwhZgYxLD4=", title: "The Saint Doggo" },
  { src: "https://media.istockphoto.com/id/2178607561/photo/a-cute-young-mixed-breed-puppy-looking-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=0jBUSH0F60r-jOzZdI20syB5vWF1GrCAEVuV0MY0MnM=", title: "Julie's Rabbit Ears" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-md overflow-hidden border"
        >
          <img src={img.src} alt={img.title} className="w-full h-40 object-cover" />
          <p className="text-center text-gray-700 font-medium py-2">{img.title}</p>
        </div>
      ))}
    </div>
  );
}
