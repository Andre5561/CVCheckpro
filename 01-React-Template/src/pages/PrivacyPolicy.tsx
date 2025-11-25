import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          Privacy Policy
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          At <strong>CVCheckPro</strong>, we take your privacy seriously. Our
          mission is to provide an intelligent, secure, and transparent way to
          analyze your resume and career documents while ensuring your personal
          data remains protected at every step.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          1. Data Collection
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          We collect only the information necessary to deliver our services.
          When you upload your resume, our system temporarily stores it to
          perform AI-based analysis. This includes identifying structure,
          formatting, skills, and keywords. Once your report is generated, the
          original file is automatically deleted unless you choose to save it to
          your personal dashboard.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          2. AI Analysis and Data Use
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Our algorithms process uploaded resumes purely for analytical
          purposes. The data is never used to train external models or shared
          with unauthorized third parties. The AI operates in a closed
          environment to ensure maximum confidentiality. Any insights generated
          are tied only to your specific session and are not stored beyond the
          active usage period.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          3. Data Retention and Deletion
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Files uploaded to CVCheckPro are automatically deleted after
          processing unless the user explicitly saves them for future access.
          Our servers use encryption both during transfer (HTTPS/TLS) and at
          rest to ensure that no unauthorized entity can access or intercept
          your information. You can permanently delete your saved reports at any
          time through your account settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          4. User Accounts and Authentication
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          When creating an account, users provide basic credentials such as
          email and password. This data is encrypted and stored securely. We
          never ask for sensitive personal details such as government IDs or
          banking information. Two-factor authentication (2FA) can be enabled to
          enhance security.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          5. Cookies and Analytics
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          We use minimal cookies necessary for platform functionality and
          analytics. Cookies help us understand usage patterns and improve user
          experience. We do not track user activity outside of our domain or
          sell analytical data to advertisers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          6. Third-Party Access
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          CVCheckPro does not sell, rent, or share personal information with
          third parties. We may use trusted infrastructure partners to host our
          platform securely (e.g., AWS, Google Cloud), but these providers have
          no access to your personal files or content.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          7. Your Rights
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          You have full control over your personal data. You can request a copy
          of your stored information, ask for deletion, or restrict processing
          at any time. We comply with international privacy standards such as
          GDPR and CCPA to ensure transparency and fairness in handling your
          data.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          8. Changes to this Policy
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          We may occasionally update this Privacy Policy to reflect improvements
          in our services or changes in privacy regulations. The updated version
          will always be available on this page, with the last revision date
          clearly indicated at the bottom.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          9. Contact Us
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          If you have any questions or concerns about our privacy practices,
          please contact us at{' '}
          <a
            href="mailto:privacy@cvcheckpro.com"
            className="text-black font-medium hover:underline"
          >
            privacy@cvcheckpro.com
          </a>
          . Our team will respond promptly to address any inquiries regarding
          data protection, security, or your user rights.
        </p>

        <p className="text-sm text-slate-500 mt-10 italic">
          Last updated: November 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
