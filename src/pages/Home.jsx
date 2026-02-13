import React from "react";
import { FaCode, FaBolt, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Build Better Web Applications
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Scalable architecture, clean code, and performance-focused development
          for modern web platforms.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Core Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition">
              <FaCode className="text-2xl mb-4 text-gray-800" />
              <h3 className="text-xl font-medium mb-3">Clean Architecture</h3>
              <p className="text-gray-600">
                Modular and maintainable code structure designed for long-term
                scalability.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition">
              <FaBolt className="text-2xl mb-4 text-gray-800" />
              <h3 className="text-xl font-medium mb-3">High Performance</h3>
              <p className="text-gray-600">
                Optimized rendering and efficient data handling for fast user
                experience.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition">
              <FaShieldAlt className="text-2xl mb-4 text-gray-800" />
              <h3 className="text-xl font-medium mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with best practices for authentication, validation, and
                secure architecture.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Ready to build something meaningful?
        </h2>

        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
          Start Now <FaArrowRight />
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
