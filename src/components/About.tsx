import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MetalCraft Forge
          </h2>
          <div className="w-24 h-1 bg-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Crafting Excellence Since 2010
            </h3>
            <p className="text-gray-600 mb-6">
              At MetalCraft Forge, we combine traditional blacksmithing
              techniques with modern innovation to create exceptional metalwork.
              Our master craftspeople have decades of experience in transforming
              raw steel into functional art.
            </p>
            <p className="text-gray-600 mb-6">
              From custom jerk pans that enhance your cooking experience to
              ornate gates that define your property's character, each piece is
              handcrafted with precision and passion.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-3 text-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Premium Materials</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Handcrafted Quality</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Custom Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Lifetime Durability</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 border-2 border-yellow/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Craftsmanship
            </h3>
            <p className="text-gray-600 mb-4">
              Every piece we create tells a story. Our process begins with
              understanding your unique requirements and ends with a product
              that exceeds expectations.
            </p>
            <p className="text-gray-600 mb-4">We specialize in:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Custom jerk pans with optimal heat distribution</li>
              <li>Decorative and security gates</li>
              <li>Steel fencing and railings</li>
              <li>Metal furniture and sculptures</li>
              <li>Restoration of vintage metalwork</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
