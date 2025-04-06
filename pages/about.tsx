import { Footer, MapSection } from "../components/FooterAndMapComponents";

export default function About() {
  return (
    <div className="p-6 md:p-12 bg-white space-y-6">
      <h1 className="text-4xl font-bold text-orange-600 text-center">About Elite Auto Body LA</h1>
      <p className="text-lg text-blue-700 text-center">Established in 1998</p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        With decades of experience, we prioritize quality and customer service above all.
        Learn more about us from our <a href="https://www.yelp.com/biz/elite-auto-body-los-angeles" className="underline text-blue-600" target="_blank">Yelp</a> or
        <a href="https://g.co/kgs/kcWquZY" className="underline text-blue-600" target="_blank"> Google reviews</a>.
      </p>
      <MapSection />
      <Footer />
    </div>
  );
}