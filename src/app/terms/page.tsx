import Link from "next/link";
import Image from "next/image";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="MoneyTime Logo" width={32} height={32} className="w-8 h-8" />
            <div className="text-2xl font-bold text-indigo-600">MoneyTime</div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="/#demo" className="text-gray-600 hover:text-indigo-600 transition-colors">Demo</Link>
            <Link href="/#download" className="text-gray-600 hover:text-indigo-600 transition-colors">Download</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-indigo-600">Use</span>
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments & Subscriptions</h2>
              <p className="text-gray-600 mb-6">
                All payments are processed through your Apple ID account. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. You can manage and cancel your subscription in your Apple ID account settings. No refunds are provided for unused portions of a subscription.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your device and for any activity under your account. You agree to use MoneyTime in accordance with all applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties & Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                MoneyTime is provided "as is" without warranties of any kind. To the maximum extent permitted by law, the developers disclaim all liability for damages arising from the use or inability to use the app.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content, features, and functionality of MoneyTime are the exclusive property of TinyBigApps and are protected by applicable copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Use</h2>
              <p className="text-gray-600 mb-6">
                You agree not to misuse MoneyTime, reverse engineer the app, or use it for unlawful purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Continued use of MoneyTime after changes constitutes acceptance of the updated terms.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
                <p className="text-indigo-900 font-semibold text-lg">
                  By using MoneyTime, you accept and agree to these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
