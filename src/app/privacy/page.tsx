import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d9f1fe' }}>
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="MoneyTime Logo" width={32} height={32} className="w-8 h-8" />
            <div className="text-2xl font-bold" style={{ color: '#00A1F5' }}>MoneyTime</div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-gray-600 transition-colors hover:text-[#00A1F5]">Features</Link>
            <Link href="/#demo" className="text-gray-600 transition-colors hover:text-[#00A1F5]">Demo</Link>
            <Link href="/#download" className="text-gray-600 transition-colors hover:text-[#00A1F5]">Download</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span style={{ color: '#00A1F5' }}>Policy</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. MoneyTime does not collect, store, or share any personal data. All information remains on your devices and/or your Apple iCloud account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage</h2>
              <p className="text-gray-600 mb-6">
                All your financial data, including transactions, budgets, and spending patterns, is stored locally on your device. We do not have access to any of your personal financial information. If you choose to use iCloud sync, your data is encrypted and stored in your personal iCloud account, not on our servers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Data Collection</h2>
              <p className="text-gray-600 mb-6">
                MoneyTime does not collect, track, or analyze your usage patterns. We do not use analytics, crash reporting, or any other data collection methods that would compromise your privacy. Your financial information never leaves your device unless you explicitly choose to back it up to iCloud.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 mb-6">
                MoneyTime does not integrate with any third-party analytics, advertising, or data collection services. The only external service we use is Apple&apos;s iCloud for optional data synchronization, which is entirely under your control.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Control</h2>
              <p className="text-gray-600 mb-6">
                You have complete control over your data. You can delete the app at any time, and all your data will be removed from your device. If you&apos;re using iCloud sync, you can disable it in your device settings, and your data will remain only on your local device.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@tinybigapps.com<br />
                  <strong>Website:</strong> <Link href="/" className="text-indigo-600 hover:text-indigo-700">moneytime.app</Link>
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Your Privacy is Our Priority</h3>
                <p className="text-indigo-700">
                  We built MoneyTime with privacy as the foundation. Your financial data stays on your device, and we never collect or share any personal information. This is our commitment to you.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#00A1F5' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
