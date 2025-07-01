import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy policy";
  }, []);
  return (
    <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 w-11/12 md:w-7/12 mx-auto">
      <h1 className="text-center text-5xl font-bold font-playfair mt-5">
        Privacy & Policy
      </h1>
      <p className="text-xl">
        At <strong>All Events</strong>, we respect your privacy and are
        committed to protecting your personal data. This Privacy Policy outlines
        how we collect, use, and safeguard your information.
      </p>

      <div>
        <h2 className="text-lg font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p>
          We collect personal information such as your name, email address, and
          event participation details when you register or interact with our
          platform.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">
          2. How We Use Your Information
        </h2>
        <p>
          Your information is used to provide and improve our services, manage
          your event participation, and communicate important updates related to
          your account or events.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">3. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your data from unauthorized access, alteration, disclosure, or
          destruction.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. Data may be shared with service providers strictly for the
          purpose of operating the platform.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information at any time. Please contact us for any privacy-related
          requests.
        </p>
      </div>

      <p className="mt-6 italic text-xs text-gray-500 dark:text-gray-400 mb-4">
        By using our platform, you consent to the terms of this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
