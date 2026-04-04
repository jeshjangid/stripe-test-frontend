export default function About() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                DonationHub is dedicated to connecting generous donors with meaningful causes.
                We believe in transparency, impact, and making giving easy and rewarding.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Our platform uses secure payment processing to ensure your donations reach
                where they're needed most. Every contribution makes a difference.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Impact Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Donations</span>
                  <span className="font-semibold text-green-500">$12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">People Helped</span>
                  <span className="font-semibold text-green-500">1,245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Projects Funded</span>
                  <span className="font-semibold text-green-500">23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security</h3>
              <p className="text-gray-600 dark:text-gray-300">Your payments are processed securely with industry-standard encryption.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">Track how your donations are used and see the real impact.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">Join thousands of donors making a positive change worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}