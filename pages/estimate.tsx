import { Footer } from "../components/FooterAndMapComponents";

export default function Estimate() {
  return (
    <div className="p-6 md:p-12 bg-white space-y-6">
      <h1 className="text-4xl font-bold text-orange-600 text-center">Request an Estimate</h1>
      <form action="https://formspree.io/f/mgvanbwa" method="POST" className="space-y-4 max-w-2xl mx-auto">
        <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" />
        <textarea name="message" placeholder="Vehicle details, damage, insurance info..." className="w-full border p-2 rounded h-32" required></textarea>
        <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">Submit</button>
      </form>
      <Footer />
    </div>
  );
}