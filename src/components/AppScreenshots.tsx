import Image from "next/image";

interface AppScreenshotsProps {
  className?: string;
}

export default function AppScreenshots({ className = "" }: AppScreenshotsProps) {
  const screenshots = [
    {
      id: 1,
      image: "/images/screenshots/budgeting-made-easy.png",
      alt: "Budgeting Made Easy - MoneyTime App Screenshot"
    },
    {
      id: 2,
      image: "/images/screenshots/trends-over-time.png",
      alt: "Trends Over Time - MoneyTime App Screenshot"
    },
    {
      id: 3,
      image: "/images/screenshots/understand-spending.png",
      alt: "Understand Your Spending - MoneyTime App Screenshot"
    },
    {
      id: 4,
      image: "/images/screenshots/track-spending.png",
      alt: "Track Your Spending - MoneyTime App Screenshot"
    }
  ];

  return (
    <section id="demo" className={className}>
  <div className="w-screen max-w-none px-0 py-20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See MoneyTime in Action
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the actual app interface and discover how intuitive financial management can be
          </p>
        </div>

        {/* Horizontally scrollable screenshots row with full visibility and fade edges */}
  <div className="relative w-screen max-w-none">
          {/* Fade edges for seamless look */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-indigo-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-indigo-100 to-transparent z-10" />
          <div
            className="flex overflow-x-auto gap-6 pb-8 w-screen max-w-none snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch', paddingLeft: '0', paddingRight: '0' }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="group min-w-[70vw] sm:min-w-[350px] max-w-[500px] snap-center flex-shrink-0"
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 bg-white"
                  priority={index < 2}
                  style={{ objectFit: 'contain', background: 'white' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-6 text-lg">
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