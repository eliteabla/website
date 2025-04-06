import { Footer } from "../components/FooterAndMapComponents";

export default function Services() {
  return (
    <div className="p-6 md:p-12 bg-white space-y-8">
      <h1 className="text-4xl font-bold text-orange-600 text-center">Our Services</h1>
      <ul className="grid gap-4 max-w-3xl mx-auto text-blue-700 list-disc list-inside">
        <li>Collision Repair</li>
        <li>Aluminum Repair</li>
        <li>Carbon Fiber Repair</li>
        <li>Auto Customization</li>
        <li>Paint Protection Film (PPF)</li>
        <li>Window Tinting</li>
        <li>Windshield Replacement</li>
        <li>Windshield Protection Film</li>
        <li>Wheel Repair</li>
        <li>Powder Coating</li>
        <li>Dent Repair</li>
        <li>Lease Return Repairs</li>
      </ul>
      <Footer />
    </div>
  );
}