import { Link, Navigate, useSearchParams } from "react-router-dom";

export default function Cancel() {
  const [params] = useSearchParams();
  const session_id = params.get("session_id");

  // ❌ direct access block
  if (!session_id) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl text-center border border-red-200 dark:border-gray-700">
        <div className="text-7xl mb-6">😔</div>
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Your donation was not completed. No charges were made to your account.
        </p>
        <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-xl mb-8 border border-red-200 dark:border-gray-600">
          <div className="flex items-center justify-center mb-3">
            <div className="text-2xl mr-2">ℹ️</div>
            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
              No Charges Made
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Your payment information was not processed. Feel free to try again when you're ready.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 Go Home
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/donate"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 text-center"
            >
              Try Again
            </Link>
            <Link
              to="/about"
              className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}