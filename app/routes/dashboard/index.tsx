// Dummy data for demonstration
const transactions = [
  {
    id: 1,
    date: "2025-07-30",
    description: "Salary",
    amount: 3000,
    type: "income",
  },
  {
    id: 2,
    date: "2025-07-29",
    description: "Groceries",
    amount: -120,
    type: "expense",
  },
  {
    id: 3,
    date: "2025-07-28",
    description: "Coffee",
    amount: -5,
    type: "expense",
  },
  {
    id: 4,
    date: "2025-07-27",
    description: "Freelance",
    amount: 800,
    type: "income",
  },
  {
    id: 5,
    date: "2025-07-26",
    description: "Rent",
    amount: -900,
    type: "expense",
  },
  {
    id: 6,
    date: "2025-07-25",
    description: "Utilities",
    amount: -150,
    type: "expense",
  },
  {
    id: 7,
    date: "2025-07-24",
    description: "Gym",
    amount: -50,
    type: "expense",
  },
  {
    id: 8,
    date: "2025-07-23",
    description: "Book",
    amount: -20,
    type: "expense",
  },
  {
    id: 9,
    date: "2025-07-22",
    description: "Gift",
    amount: -60,
    type: "expense",
  },
  {
    id: 10,
    date: "2025-07-21",
    description: "Transport",
    amount: -30,
    type: "expense",
  },
];

const received = transactions
  .filter((t) => t.type === "income")
  .reduce((sum, t) => sum + t.amount, 0);
const spent = transactions
  .filter((t) => t.type === "expense")
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);
const balance = received - spent;

// TODO: fix hydration issue. decimal values are rendered with `.` on the backend and `,` on the frontend

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start border">
          <span className="text-gray-500 text-sm mb-1">
            Received (This Month)
          </span>
          <span className="text-2xl font-bold text-green-600">${received}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start border">
          <span className="text-gray-500 text-sm mb-1">Spent (This Month)</span>
          <span className="text-2xl font-bold text-red-600">${spent}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start border">
          <span className="text-gray-500 text-sm mb-1">Balance</span>
          <span
            className={`text-2xl font-bold ${balance >= 0 ? "text-green-700" : "text-red-700"}`}
          >
            ${balance}
          </span>
        </div>
      </div>

      {/* Latest Transactions Table */}
      <div className="bg-white rounded-lg shadow border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Latest Transactions</h2>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
            + Add Transaction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-medium text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">
                  Description
                </th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b last:border-b-0">
                  <td className="px-4 py-2 whitespace-nowrap">{t.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {t.description}
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-right font-mono ${t.type === "income" ? "text-green-600" : "text-red-600"}`}
                  >
                    {t.type === "income" ? "+" : "-"}${Math.abs(t.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
