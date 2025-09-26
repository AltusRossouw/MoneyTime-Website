import Image from "next/image";

interface AppScreenshotsProps {
  className?: string;
}

export default function AppScreenshots({ className = "" }: AppScreenshotsProps) {
  return (
    <section id="demo" className={className}>
      {/* Full-width image with no borders or padding */}
      <div className="w-full">
        <Image
          src="/images/screenshots/app-overview-all-screens.png"
          alt="MoneyTime App Screenshots - Complete Overview"
          width={1440}
          height={720}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
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