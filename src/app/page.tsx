import Link from "next/link";
import Image from "next/image";
import AppScreenshots from "../components/AppScreenshots";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="MoneyTime Logo" width={32} height={32} className="w-8 h-8" />
            <div className="text-2xl font-bold text-indigo-600">MoneyTime</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="#demo" className="text-gray-600 hover:text-indigo-600 transition-colors">Demo</Link>
            <Link href="#download" className="text-gray-600 hover:text-indigo-600 transition-colors">Download</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image src="/images/logo.png" alt="MoneyTime App Icon" width={96} height={96} className="w-24 h-24 mx-auto mb-4 rounded-2xl shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            MoneyTime: <span className="text-indigo-600">Spending Tracker</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            See what&apos;s safe-to-spend today, track expenses in seconds, set a budget, 
            and reach your savings goals faster with MoneyTime — your all-in-one budget app & money manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#download" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="#features" 
              className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* App Preview Section - Full Width Hero */}
        <section className="py-24 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-16">
          <div className="w-full">
            <Image 
              src="/images/moneytime-app-preview.png" 
              alt="MoneyTime App Screenshots" 
              width={1400}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Everything you need to manage your money</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">MoneyTime turns budgeting into a simple daily habit</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">All your money in one place</h3>
              <p className="text-gray-600 leading-relaxed text-base">See your cash, savings, credit cards, and bank accounts — with multi-currency support — all in one app. Add transactions in seconds for a clear picture of your money at all times.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">Budget that keeps you on track</h3>
              <p className="text-gray-600 leading-relaxed text-base">Set your monthly budget and let MoneyTime guide you day by day. Always know what&apos;s safe-to-spend today and finally stick to it without the guesswork.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">Grow savings and reach your goals</h3>
              <p className="text-gray-600 leading-relaxed text-base">Set your savings target and track your progress with ease. MoneyTime helps you reduce wasteful spending so you can reach your goals faster.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">See where your money goes</h3>
              <p className="text-gray-600 leading-relaxed text-base">Organize your expenses with simple categories and subcategories. Understand your habits and make smarter choices every day.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">Track expenses in seconds</h3>
              <p className="text-gray-600 leading-relaxed text-base">Add transactions in seconds for a clear picture of your money at all times. Simple and intuitive interface makes expense tracking effortless.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">Understand your spending better</h3>
              <p className="text-gray-600 leading-relaxed text-base">Detailed reports show you exactly how you spend over time. Monthly reports and long-term trends help you track your progress.</p>
            </div>
          </div>
        </section>

        {/* App Screenshots Demo Section */}
        <AppScreenshots />

        {/* CTA Section */}
        <section id="download" className="py-16 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start building better money habits today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your budget planner, expense tracker, and money manager in one simple app.
            </p>
            <Link 
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
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-indigo-600 mb-4">MoneyTime</div>
          <div className="text-gray-600 mb-4">
            <Link href="https://moneytime.tinybigapps.com/terms" className="hover:text-indigo-600">
              Terms of Use & Privacy Policy
            </Link>
          </div>
          <p className="text-gray-500">© 2025 MoneyTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
