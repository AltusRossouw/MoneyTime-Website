import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold text-indigo-600 mb-4">MoneyTime</div>
        <div className="text-gray-600 mb-4">
          <Link href="https://moneytime.tinybigapps.com/terms" className="hover:text-indigo-600 transition-colors">
            Terms of Use & Privacy Policy
          </Link>
        </div>
        <p className="text-gray-500">© 2024 MoneyTime. All rights reserved.</p>
      </div>
    </footer>
  );
}