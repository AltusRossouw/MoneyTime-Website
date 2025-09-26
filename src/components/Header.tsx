import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">MoneyTime</div>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link href="#download" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Download
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}