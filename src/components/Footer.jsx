export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-green-400">DonationHub</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Making a difference through community donations. Every contribution counts towards creating positive change.
            </p>
           
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition duration-300">About</a></li>
              <li><a href="/donate" className="text-gray-300 hover:text-green-400 transition duration-300">Donate</a></li>
              <li><a href="/payments" className="text-gray-300 hover:text-green-400 transition duration-300">Payments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@donationhub.com</p>
              <p>📞 (123) 456-7890</p>
              <p>📍 Global Impact</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2026 DonationHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}