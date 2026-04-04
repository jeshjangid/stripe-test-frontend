import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">DonationHub</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition duration-300">About</Link>
          <Link to="/donate" className="hover:text-green-400 transition duration-300">Donate</Link>
          <Link to="/payments" className="hover:text-green-400 transition duration-300">Payments</Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="hidden md:hidden bg-gray-800 px-4 py-2">
        <Link to="/" className="block py-2 hover:text-green-400">Home</Link>
        <Link to="/about" className="block py-2 hover:text-green-400">About</Link>
        <Link to="/donate" className="block py-2 hover:text-green-400">Donate</Link>
        <Link to="/payments" className="block py-2 hover:text-green-400">Payments</Link>
      </div>
    </header>
  );
}