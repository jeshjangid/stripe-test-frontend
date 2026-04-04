

import { useEffect, useState } from "react";
import { getPayments } from "../api";

export default function PaymentTable() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPayments();
    console.log("Fetching payments...", payments);
  }, []);
  
  const fetchPayments = async () => {
    try {
      const res = await getPayments();
      setPayments(res.data || []);
      setError(null);
    } catch (err) {
      console.error("Failed to load payments:", err);
      setError("Failed to load real payment data");
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  const getLatestStatus = (transitions) => {
    if (!transitions || transitions.length === 0) return "N/A";
    return transitions[transitions.length - 1].status;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Recent Donations
      </h2>

      {error && (
        <div className="text-center mb-4">
          <p className="text-yellow-600 dark:text-yellow-400 text-sm bg-yellow-50 dark:bg-yellow-900 p-3 rounded-lg inline-block">
            {error}
          </p>
        </div>
      )}

      {payments.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No donations yet. Be the first to donate!
        </p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  S.No
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Transitions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {payments.map((p, index) => {
                const latestStatus = getLatestStatus(p.transitions);

                return (
                  <tr key={p._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    {/* Email */}
                    <td className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                      {index + 1}
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
                      ${p.amount?.toFixed(2)}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          latestStatus === "paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {latestStatus}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>

                    {/* Transitions */}
                    {/* <td className="px-4 py-4 text-xs text-gray-600 dark:text-gray-300">
                      {p.transitions?.length > 0 ? (
                        p.transitions.map((t, i) => (
                          <div key={i}>
                            <span className="font-medium">{t.status}</span>{" "}
                            <span className="text-gray-400">
                              ({new Date(t.at).toLocaleString()})
                            </span>
                          </div>
                        ))
                      ) : (
                        "No history"
                      )}
                    </td> */}
                    <td className="px-4 py-4 text-xs text-gray-600 dark:text-gray-300">
  {p.transitions?.filter(t => t.status === "paid").length > 0 ? (
    p.transitions
      .filter(t => t.status === "paid")
      .map((t, i) => (
        <div key={i}>
          <span className="font-medium">{t.status}</span>{" "}
          <span className="text-gray-400">
            ({new Date(t.at).toLocaleString()})
          </span>
        </div>
      ))
  ) : (
    "No paid history"
  )}
</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}