import { FaCogs, FaBook, FaLayerGroup, FaHeadset } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="relative py-20 bg-gray-50">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 rounded-full hover:border-gray-300"
          >
            🔥 Join Membership just for $9.99/Month
          </a>
          <h1 className="mt-5 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            AI Content
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              {" "}
              Generator
            </span>
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Revolutionize your content creation with our AI-powered app,
            delivering engaging and high-quality text in seconds.
          </p>
          <div className="mt-8">
            <a
              href="/sign-in"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-flex items-center justify-center"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto">
                <FaLayerGroup size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                25+ templates
              </h3>
              <p className="mt-2 text-gray-600">
                Responsive, and mobile-first project on the web
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto">
                <FaCogs size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Customizable
              </h3>
              <p className="mt-2 text-gray-600">
                Components are easily customized and extendable
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto">
                <FaBook size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Free to Use
              </h3>
              <p className="mt-2 text-gray-600">
                Every component and plugin is well documented
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto">
                <FaHeadset size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-600">
                Contact us 24 hours a day, 7 days a week
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
