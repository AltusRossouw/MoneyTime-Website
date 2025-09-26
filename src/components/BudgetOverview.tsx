interface BudgetOverviewProps {
  className?: string;
}

export default function BudgetOverview({ className = "" }: BudgetOverviewProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
      
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl p-4 mb-6 text-white">
        <div className="text-sm opacity-90 mb-1">September</div>
        <div className="text-sm opacity-90 mb-2">Balance</div>
        <div className="text-2xl font-bold mb-4">$10,504.74</div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">−</span>
            </div>
            <div>
              <div className="text-xs opacity-90">Expense</div>
              <div className="text-sm font-semibold">$2,797.83</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">+</span>
            </div>
            <div>
              <div className="text-xs opacity-90">Income</div>
              <div className="text-sm font-semibold">$5,540.33</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Budget */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Monthly Budget</h4>
        <div className="text-xs text-gray-500 mb-1">Remaining</div>
        <div className="text-2xl font-bold text-green-600 mb-3">$1,702.17</div>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '62%' }}></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <span>$2,797.83</span>
          <span>$4,500.00</span>
        </div>
        
        <div className="bg-white rounded-lg p-3">
          <div className="text-sm font-semibold text-gray-900">Safe-to-spend today: $42.46</div>
          <div className="text-xs text-gray-500">17 days left, daily limit: $103.73</div>
        </div>
      </div>
    </div>
  );
}