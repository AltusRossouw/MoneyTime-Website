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
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          See MoneyTime in Action
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Experience the actual app interface and discover how intuitive financial management can be
        </p>
      </div>

      {/* Mobile: Horizontal scroll with fade edges */}
      <div className="lg:hidden relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-indigo-100 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-indigo-100 to-transparent z-10" />
        <div
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
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

      {/* Desktop: Centered grid layout */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className="group max-w-[300px] w-full"
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
    </section>
  );
}