interface SpendingAnalysisProps {
  className?: string;
}

export default function SpendingAnalysis({ className = "" }: SpendingAnalysisProps) {
  const categories = [
    { name: 'Housing', amount: 1277.99, percentage: 36.87, color: 'bg-red-500', icon: '🏠' },
    { name: 'Car', amount: 857.48, percentage: 24.74, color: 'bg-red-400', icon: '🚗' },
    { name: 'Groceries', amount: 442.57, percentage: 15.82, color: 'bg-red-300', icon: '🛒' },
    { name: 'Utilities', amount: 300.00, percentage: 8.65, color: 'bg-red-200', icon: '⚡' },
    { name: 'Entertainment', amount: 250.00, percentage: 7.21, color: 'bg-red-100', icon: '🎮' },
    { name: 'Other', amount: 237.89, percentage: 6.71, color: 'bg-gray-200', icon: '📝' }
  ];

  const totalAmount = 3465.93;

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Expense Categories</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-lg text-xs font-medium">July 2025</button>
          <button className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">August 2025</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-medium">September 2025</button>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
          />
          
          {/* Donut segments */}
          {categories.map((category, index) => {
            const circumference = 2 * Math.PI * 35;
            const strokeDasharray = (category.percentage / 100) * circumference;
            const strokeDashoffset = categories.slice(0, index).reduce((acc, cat) => 
              acc - (cat.percentage / 100) * circumference, 0);
            
            const getStrokeColor = (colorClass: string) => {
              const colors: { [key: string]: string } = {
                'bg-red-500': '#ef4444',
                'bg-red-400': '#f87171',
                'bg-red-300': '#fca5a5',
                'bg-red-200': '#fecaca',
                'bg-red-100': '#fee2e2',
                'bg-gray-200': '#d1d5db'
              };
              return colors[colorClass] || '#ef4444';
            };
            
            return (
              <circle
                key={category.name}
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke={getStrokeColor(category.color)}
                strokeWidth="8"
                strokeDasharray={`${strokeDasharray}, ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xs text-gray-500">September 2025</div>
          <div className="text-lg font-bold text-red-600">${totalAmount.toLocaleString()}</div>
        </div>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center text-white`}>
                <span>{category.icon}</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.percentage.toFixed(2)}%</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">${category.amount.toLocaleString()}</div>
              <div className="text-xs text-gray-500">
                {category.name === 'Car' ? '▼' : '▶'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}