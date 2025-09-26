interface TransactionListProps {
  className?: string;
}

export default function TransactionList({ className = "" }: TransactionListProps) {
  const transactions = [
    {
      id: 1,
      category: 'Dining',
      description: 'Takeout & Delivery',
      amount: 58.58,
      currency: '$',
      foreignAmount: '€49.93',
      icon: '🍽️',
      color: 'bg-red-500',
      type: 'expense'
    },
    {
      id: 2,
      category: 'Salary',
      description: 'Base Pay',
      amount: 5540.33,
      currency: '$',
      icon: '💼',
      color: 'bg-green-500',
      type: 'income'
    },
    {
      id: 3,
      category: 'Car',
      description: 'Lease Payment',
      amount: 692.38,
      currency: '$',
      icon: '🚗',
      color: 'bg-red-500',
      type: 'expense'
    },
    {
      id: 4,
      category: 'Dining',
      description: 'Takeout & Delivery',
      amount: 30.41,
      currency: '$',
      icon: '🍽️',
      color: 'bg-red-500',
      type: 'expense'
    },
    {
      id: 5,
      category: 'Entertainment',
      description: 'Movies',
      amount: 19.65,
      currency: '$',
      icon: '🎮',
      color: 'bg-red-500',
      type: 'expense'
    },
    {
      id: 6,
      category: 'Utilities',
      description: 'Heating',
      amount: 79.85,
      currency: '$',
      icon: '⚡',
      color: 'bg-red-500',
      type: 'expense'
    }
  ];

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Transactions</h3>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-400 bg-gray-50"
        />
      </div>

      {/* Date Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">Sun, Sep 14, 2025</div>
        <div className="text-sm font-medium">$4,789.37</div>
      </div>

      {/* Transaction Items */}
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${transaction.color} rounded-full flex items-center justify-center text-white`}>
                <span className="text-sm">{transaction.icon}</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{transaction.category}</div>
                <div className="text-xs text-gray-500">{transaction.description}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                {transaction.type === 'income' ? '+' : ''}{transaction.currency}{transaction.amount.toLocaleString()}
              </div>
              {transaction.foreignAmount && (
                <div className="text-xs text-gray-500">{transaction.foreignAmount}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Previous Day */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500 mb-2">Fri, Sep 12, 2025</div>
        <div className="text-sm text-gray-400">-$99.50</div>
      </div>
    </div>
  );
}