import Image from "next/image";

interface AppScreenshotsProps {
  className?: string;
}

export default function AppScreenshots({ className = "" }: AppScreenshotsProps) {
  const screenshots = [
    {
      id: 1,
      title: "Budgeting Made Easy",
      description: "See your balance, expenses, and income at a glance. Know exactly what's safe to spend today.",
      image: "/images/screenshots/budgeting-made-easy.png",
      features: ["Monthly overview", "Safe-to-spend calculation", "Budget tracking", "Daily spending limits"]
    },
    {
      id: 2,
      title: "Trends Over Time",
      description: "Visualize your spending patterns with detailed charts and track your financial progress.",
      image: "/images/screenshots/trends-over-time.png",
      features: ["12-month spending trends", "Weekly summaries", "Progress tracking", "Visual analytics"]
    },
    {
      id: 3,
      title: "Understand Your Spending",
      description: "Break down expenses by category and see exactly where your money goes each month.",
      image: "/images/screenshots/understand-spending.png",
      features: ["Category breakdown", "Spending percentages", "Visual pie charts", "Monthly analysis"]
    },
    {
      id: 4,
      title: "Track Your Spending",
      description: "Log transactions quickly and keep a detailed record of all your financial activity.",
      image: "/images/screenshots/track-spending.png",
      features: ["Transaction history", "Multi-currency support", "Quick search", "Category tagging"]
    }
  ];

  return (
    <section id="demo" className={`py-20 bg-gradient-to-br from-blue-500 to-purple-600 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            See MoneyTime in Action
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the actual app interface and discover how intuitive financial management can be
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* iPhone Mockup */}
              <div className="relative mx-auto mb-6" style={{ width: '200px', height: '400px' }}>
                <div className="absolute inset-0 bg-black rounded-[2.5rem] p-2">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Actual Screenshot */}
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      width={400}
                      height={800}
                      className="w-full h-full object-cover"
                      priority={index < 2}
                    />
                  </div>
                  
                  {/* iPhone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  {screenshot.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {screenshot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                      <span className="text-xs text-blue-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">
            Ready to take control of your finances?
          </p>
          <a 
            href="https://apps.apple.com/app/id1632869872"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/images/app-store-logo.png" 
              alt="Download on the App Store" 
              width={200}
              height={67}
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}