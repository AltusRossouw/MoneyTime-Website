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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          See MoneyTime in Action
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Experience the actual app interface and discover how intuitive financial management can be
        </p>
      </div>

      {/* Mobile: Compact horizontal scroll */}
      <div className="lg:hidden relative px-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-indigo-100 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-indigo-100 to-transparent z-10" />
        <div
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="group min-w-[200px] max-w-[200px] snap-center flex-shrink-0"
            >
              <div className="relative w-full h-[320px] bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  width={200}
                  height={320}
                  className="w-full h-full object-cover rounded-xl"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet: 2x2 grid */}
      <div className="hidden lg:hidden md:grid md:grid-cols-2 gap-6 px-4">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className="group max-w-[280px] mx-auto"
          >
            <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Image
                src={screenshot.image}
                alt={screenshot.alt}
                width={280}
                height={400}
                className="w-full h-full object-cover rounded-xl"
                priority={index < 2}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Centered grid layout */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className="group max-w-[250px] w-full"
          >
            <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Image
                src={screenshot.image}
                alt={screenshot.alt}
                width={250}
                height={400}
                className="w-full h-full object-cover rounded-xl"
                priority={index < 2}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}