import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";

export default function Success() {
  const [params] = useSearchParams();
  const session_id = params.get("session_id");

  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!session_id) {
      setStatus(false);
      return;
    }
    axios
      .post("https://stripe-test-g0wy.onrender.com/api/verify-payment", {
        session_id,
      })
      .then((res) => {
        setStatus(res.data.success);
      })
      .catch(() => setStatus(false));
  }, [session_id]);

  if (status === null) return <p>Verifying payment...</p>;
  if (!status) return <Navigate to="/" />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl text-center border border-green-200 dark:border-gray-700">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
          Donation Successful!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Thank you for your generous donation! Your contribution will help make a real difference in someone's life.
        </p>
        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl mb-8 border border-green-200 dark:border-gray-600">
          <div className="flex items-center justify-center mb-3">
            <div className="text-2xl mr-2">✅</div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
              Payment Confirmed
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            A confirmation email has been sent to your inbox with donation details.
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
              to="/payments"
              className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition duration-300 text-center"
            >
              View Donations
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