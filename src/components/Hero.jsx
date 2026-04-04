import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Make a <span className="text-green-400">Difference</span> Today
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Your donation can change lives. Join our community of generous donors
          and help create positive impact around the world.
        </p>
        <Link
          to="/donate"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-300 transform hover:scale-105 inline-block"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}