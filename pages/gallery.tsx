import { Footer, MapSection } from "../components/FooterAndMapComponents";

export default function Gallery() {
  const mediaItems = [
    { type: "image", src: "/gallery/photo1.jpg" },
    { type: "image", src: "/gallery/photo2.jpg" },
    { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { type: "image", src: "/gallery/photo3.jpg" }
  ];

  return (
    <div className="space-y-8 p-6 md:p-12 bg-white">
      <section className="text-center space-y-4">
        <img src="/logo.png" alt="Elite Auto Body LA Logo" className="mx-auto h-16" />
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">Gallery</h1>
        <p className="text-lg text-blue-700">Explore our recent work — from full collision restorations to custom styling and PPF installs.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mediaItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <iframe
                src={item.src}
                className="w-full h-60 rounded-xl"
                allowFullScreen
                title={`Gallery video ${index + 1}`}
              ></iframe>
            )}
          </div>
        ))}
      </section>

      <MapSection />
      <Footer />
    </div>
  );
}