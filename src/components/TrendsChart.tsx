interface TrendsChartProps {
  className?: string;
}

export default function TrendsChart({ className = "" }: TrendsChartProps) {
  const monthlyData = [
    { month: 'Oct', amount: 4800 },
    { month: 'Nov', amount: 4200 },
    { month: 'Dec', amount: 4600 },
    { month: 'Jan', amount: 3800 },
    { month: 'Feb', amount: 4300 },
    { month: 'Mar', amount: 3200 },
    { month: 'Apr', amount: 3400 },
    { month: 'May', amount: 3100 },
    { month: 'Jun', amount: 2900 },
    { month: 'Jul', amount: 2800 },
    { month: 'Aug', amount: 2700 },
    { month: 'Sep', amount: 2866 }
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Summary</h3>
      
      {/* Weekly Stats */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-xs">−</span>
          </div>
          <div>
            <div className="text-xs text-gray-500">Expense</div>
            <div className="text-sm font-semibold text-red-600">$1,293.65</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-xs">+</span>
          </div>
          <div>
            <div className="text-xs text-gray-500">Income</div>
            <div className="text-sm font-semibold text-green-600">$5,540.33</div>
          </div>
        </div>
      </div>

      {/* Trends Section */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-900">Trends</h4>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded-lg text-xs font-medium">Expense</button>
            <button className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">Income</button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">September 2025</span>
              <span className="text-xs text-green-600 font-medium">↓ 17%</span>
            </div>
            <div className="text-lg font-bold text-red-600">$2,865.93</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Last 12M Average</div>
            <div className="text-lg font-bold text-gray-600">$3,438.89</div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-32 mb-2">
          <div className="absolute inset-0 flex items-end justify-between space-x-1">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex flex-col items-center">
                <div 
                  className="bg-red-400 w-6 rounded-t"
                  style={{ 
                    height: `${(data.amount / maxAmount) * 100}%`,
                    minHeight: '20%'
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          {/* Y-axis labels */}
          <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-xs text-gray-400">
            <span>5K</span>
            <span>4K</span>
            <span>3K</span>
            <span>2K</span>
            <span>1K</span>
            <span>0</span>
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-400">
          {monthlyData.map(data => (
            <span key={data.month}>{data.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}