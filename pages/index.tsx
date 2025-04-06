import { Footer, MapSection } from "../components/FooterAndMapComponents";

export default function Home() {
  return (
    <div className="space-y-8 p-6 md:p-12 text-center bg-white">
      <img src="/logo.png" alt="Elite Auto Body LA Logo" className="mx-auto h-20 mb-4" />
      <h1 className="text-4xl font-bold text-orange-600">Elite Auto Body LA</h1>
      <p className="text-lg text-blue-700">Collision Repair & Customization Since 1998</p>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Serving Los Angeles with expert collision repair, paint protection film, ceramic tint, and more.
      </p>
      <div className="mt-6">
        <a href="/estimate" className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700">Get an Estimate</a>
      </div>
      <MapSection />
      <Footer />
    </div>
  );
}