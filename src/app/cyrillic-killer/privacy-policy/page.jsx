"use client";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy for Cyrillic Killer
          </h1>

          <div className="text-lg space-y-6">
            <p className="text-gray-600">
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p>
                Cyrillic Killer ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how our
                browser extension handles information when you use it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Data Collection and Storage
              </h2>
              <p>
                <strong>
                  Cyrillic Killer does not collect, transmit, or store any
                  personal information or user data on external servers.
                </strong>
              </p>
              <p>
                The extension operates entirely locally on your device. The only
                data stored is:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong>Site Exception List:</strong> A list of website
                  domains that you choose to exclude from Cyrillic character
                  blurring. This list is stored locally in your browser's
                  storage using Chrome's storage API.
                </li>
                <li>
                  <strong>Extension Preferences:</strong> Your personal settings
                  and preferences for the extension, which are stored locally in
                  your browser.
                </li>
              </ul>
              <p className="mt-4">
                All stored data remains on your device and is never transmitted
                to any external server, third-party service, or our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                How We Use Information
              </h2>
              <p>
                The extension uses locally stored data solely for the following
                purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  To remember which websites you have excluded from Cyrillic
                  character blurring
                </li>
                <li>To maintain your extension preferences and settings</li>
                <li>
                  To provide the core functionality of blurring Cyrillic
                  characters on web pages
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Permissions Used
              </h2>
              <p>Cyrillic Killer requires the following permissions:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong>Storage:</strong> Used to store your site exception
                  list and preferences locally on your device.
                </li>
                <li>
                  <strong>ActiveTab:</strong> Used to access the current tab's
                  content to detect and blur Cyrillic characters.
                </li>
              </ul>
              <p className="mt-4">
                The extension only accesses the content of tabs when you are
                actively viewing them. It does not access tabs in the background
                or when they are not active.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Third-Party Services
              </h2>
              <p>
                Cyrillic Killer does not use any third-party services, analytics
                tools, tracking scripts, or external APIs. The extension
                operates completely independently and does not communicate with
                any external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Data Security
              </h2>
              <p>
                Since all data is stored locally on your device using your
                browser's built-in storage mechanisms, your data is protected by
                your browser's security features. We do not have access to your
                stored data, and it cannot be accessed by external parties
                through our extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Data Deletion
              </h2>
              <p>
                You can delete all data associated with Cyrillic Killer at any
                time by:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Uninstalling the extension from your browser</li>
                <li>
                  Clearing your browser's extension storage data through your
                  browser's settings
                </li>
                <li>
                  Manually removing sites from the exception list through the
                  extension's popup interface
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Children's Privacy
              </h2>
              <p>
                Cyrillic Killer is not directed to children under the age of 13.
                We do not knowingly collect personal information from children.
                Since we do not collect any personal information, this policy
                applies to all users regardless of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the top of
                this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us through:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  Our website:{" "}
                  <a
                    href="https://vasin.fr"
                    className="text-blue-600 hover:underline"
                  >
                    https://vasin.fr
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/vasin-fr"
                    className="text-blue-600 hover:underline"
                  >
                    https://github.com/vasin-fr
                  </a>
                </li>
              </ul>
            </section>

            <section className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-600">
                By using Cyrillic Killer, you agree to the terms of this Privacy
                Policy. If you do not agree with this policy, please do not use
                the extension.
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
