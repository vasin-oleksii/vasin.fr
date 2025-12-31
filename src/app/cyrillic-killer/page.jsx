"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CyrillicKillerPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
        <div className="max-w-6xl mx-auto">
          {/* HERO SECTION */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Cyrillic Killer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-700 mb-8"
              >
                Blurs all Cyrillic characters on web pages with site exception
                management
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Install from Chrome Web Store
                </a>
                <Link
                  href="/cyrillic-killer/privacy-policy"
                  className="px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
            <div className="flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-md h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-6xl"
              >
                🚫
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cyrillic Killer is a browser extension designed to help users stay
              focused by automatically blurring all Cyrillic characters on web
              pages. It is ideal for language learning, reducing distractions,
              or filtering specific types of content. The extension works
              seamlessly in the background and allows users to manage
              site-based exceptions.
            </p>
          </motion.section>

          {/* FEATURES */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🔤</div>
                <h3 className="text-xl font-semibold mb-2">
                  Automatic Cyrillic Detection
                </h3>
                <p className="text-gray-700">
                  Detects and blurs all Cyrillic characters (Unicode range
                  U+0400–U+04FF) on any website. Works with both static and
                  dynamic content, including modern web applications built with
                  React and Vue, and supports Shadow DOM for full coverage.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2">
                  Smart Site Exception Management
                </h3>
                <p className="text-gray-700">
                  Easily add websites to an exception list to disable blurring on
                  selected domains. Wildcard domain patterns (e.g.,
                  *.example.com) are supported. One-click toggle allows adding
                  or removing the current site.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern and Intuitive Interface
                </h3>
                <p className="text-gray-700">
                  Clean and modern popup interface for managing site exceptions.
                  Includes real-time site detection and clear visual feedback
                  about whether the current site is excluded or affected.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">
                  High Performance
                </h3>
                <p className="text-gray-700">
                  Optimized to minimize performance impact. Uses debouncing to
                  prevent slowdowns, intelligently avoids interfering with text
                  input fields, and manages memory efficiently.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">
                  Privacy and Security
                </h3>
                <p className="text-gray-700">
                  All data is stored locally in your browser. The extension does
                  not use external servers, does not collect personal data, and
                  does not include tracking or analytics.
                </p>
              </div>
            </div>
          </motion.section>

          {/* USE CASES */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📖</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Language Learning
                  </h3>
                  <p className="text-gray-700">
                    Focus on non-Cyrillic content while learning languages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Productivity</h3>
                  <p className="text-gray-700">
                    Improve productivity by reducing visual distractions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎛️</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Content Filtering
                  </h3>
                  <p className="text-gray-700">
                    Custom content filtering based on personal preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">♿</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Accessibility</h3>
                  <p className="text-gray-700">
                    Accessibility adjustments for better content visibility
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TECHNICAL DETAILS */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Technical Details</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>• Manifest version: 3</li>
                <li>• Permissions: storage, activeTab</li>
                <li>
                  • Compatibility: Chrome, Edge, and other Chromium-based
                  browsers
                </li>
                <li>• Performance: optimized for low resource usage</li>
              </ul>
            </div>
          </motion.section>

          {/* PRIVACY POLICY LINK */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center p-8 bg-gray-50 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Privacy & Security</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. All data is stored locally on
              your device. We do not collect, transmit, or store any personal
              information.
            </p>
            <Link
              href="/cyrillic-killer/privacy-policy"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Read Full Privacy Policy
            </Link>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default CyrillicKillerPage;

