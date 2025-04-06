import { Footer, MapSection } from "../components/FooterAndMapComponents";

export default function ThankYou() {
  return (
    <div className="p-6 md:p-12 bg-white text-center space-y-6">
      <h1 className="text-4xl font-bold text-orange-600">Thank You!</h1>
      <p className="text-blue-700 text-lg">Your request has been received. We'll get back to you ASAP.</p>
      <p className="text-gray-500">Feel free to call or email us if you need anything in the meantime.</p>
      <MapSection />
      <Footer />
    </div>
  );
}