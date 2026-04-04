import { useState } from "react";
import { createCheckout } from "../api";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await createCheckout(amount);
      window.location.href = res.data.url;
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  const displayAmount = amount ? `$${amount}` : "$0";

  return (
    <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Make a Donation
          </h2>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-green-500 mb-2">
              {displayAmount}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              One-time donation
            </p>
          </div>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || Number(value) > 0) {
                setAmount(value);
              }
            }}
             onKeyDown={(e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  }}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            onClick={handlePayment}
            disabled={loading || !amount}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "Processing..." : `Donate ${displayAmount}`}
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </section>
  );
}
