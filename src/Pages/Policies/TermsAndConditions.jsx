import React, { useEffect } from "react";

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = "Terms & Conditions";
  }, []);
  return (
    <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 w-11/12 lg:w-7/12 mx-auto">
      <h1 className="text-center text-5xl font-bold font-playfair mt-5">
        Terms & Conditions
      </h1>
      <p className="text-xl">
        Welcome to <strong>All Events</strong>. By using our platform, you agree
        to comply with and be bound by the following terms and conditions of
        use.
      </p>

      <div>
        <h2 className="text-lg font-semibold mt-4">1. Event Participation</h2>
        <p>
          Users can join any event listed on the platform. However, a user can
          join a specific event only once. Event creators are responsible for
          the content they publish.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mt-4">2. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and any activity that occurs under your account.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">3. Content Ownership</h2>
        <p>
          All events, descriptions, and materials uploaded by users remain their
          intellectual property. However, by submitting them, you grant All
          Events a non-exclusive license to display and promote the content.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">
          4. Modification & Termination
        </h2>
        <p>
          We reserve the right to update, modify, or terminate any feature or
          part of the service at any time without prior notice.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">5. Privacy Policy</h2>
        <p>
          We are committed to protecting your privacy. User information is used
          only for internal platform functionalities and never shared with third
          parties.
        </p>
      </div>

      <p className="mt-6 italic text-xs text-gray-500 mb-6">
        By continuing to use our platform, you acknowledge that you have read
        and understood these terms.
      </p>
    </div>
  );
};

export default TermsAndCondition;
