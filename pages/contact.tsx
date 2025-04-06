import { Footer, MapSection } from "../components/FooterAndMapComponents";

export default function Contact() {
  return (
    <div className="p-6 md:p-12 bg-white space-y-6 text-center">
      <h1 className="text-4xl font-bold text-orange-600">Contact Us</h1>
      <p className="text-lg text-blue-700">We’re here 24/7 at (323) 665-2440</p>
      <p className="text-gray-600">
        1821 Hyperion Ave, Los Angeles, CA 90027<br />
        info@eliteabla.com | EliteAutoBodyLA@gmail.com
      </p>
      <MapSection />
      <Footer />
    </div>
  );
}