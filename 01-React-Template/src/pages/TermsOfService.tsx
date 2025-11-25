import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          Terms of Service
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          Welcome to <strong>CVCheckPro</strong>. By accessing or using our
          platform, you agree to comply with the following Terms of Service.
          These terms are designed to ensure a transparent, secure, and fair
          experience for every user. Please read them carefully before using our
          website or purchasing any of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          1. Acceptance of Terms
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          By creating an account, uploading your resume, or interacting with any
          part of CVCheckPro, you acknowledge that you have read, understood,
          and agree to be bound by these Terms of Service. If you do not agree,
          you must discontinue use of the platform immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          2. Description of Service
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          CVCheckPro provides AI-driven tools that analyze resumes and offer
          actionable insights to improve their structure, readability, and ATS
          (Applicant Tracking System) compatibility. The results are based on
          automated algorithms trained on anonymized data and publicly available
          recruitment trends. While our AI strives for high accuracy, it cannot
          guarantee any specific hiring outcomes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          3. User Responsibilities
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Users are solely responsible for the content they upload. You agree
          not to upload unlawful, copyrighted, or confidential materials without
          permission. By using CVCheckPro, you confirm that your uploaded
          documents belong to you and that their content does not violate any
          laws or third-party rights.
        </p>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Users also agree to:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 leading-relaxed">
          <li>
            Provide accurate account information and maintain its security.
          </li>
          <li>
            Use the platform only for personal or professional resume
            improvement.
          </li>
          <li>
            Refrain from attempting to reverse engineer or misuse the service.
          </li>
          <li>
            Respect other users and CVCheckPro staff in all communications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          4. Intellectual Property
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          All platform content, including design, text, graphics, software, and
          algorithms, is the exclusive property of CVCheckPro and is protected
          by copyright and international intellectual property laws. You are not
          permitted to reproduce, distribute, or modify any part of the service
          without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          5. AI Limitations
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          CVCheckPro uses artificial intelligence to generate recommendations
          based on resume data and current recruitment patterns. The analysis is
          informational only and does not replace human review or professional
          judgment. We make no guarantees regarding employment success,
          interview invitations, or hiring results derived from our reports.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          6. Service Modifications
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          We reserve the right to modify, update, or discontinue any part of the
          service at any time, with or without notice. Prices and available
          features may change as we expand functionality or upgrade technology.
          Users will be notified of major changes in advance whenever possible.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          7. Limitation of Liability
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          CVCheckPro is provided “as is” and “as available.” We are not liable
          for any damages arising from:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 leading-relaxed">
          <li>Errors or omissions in resume analysis results.</li>
          <li>Temporary downtime or service interruptions.</li>
          <li>
            Loss of uploaded files due to user deletion or expired sessions.
          </li>
          <li>Decisions made by employers or recruiters based on AI output.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          8. Termination
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          CVCheckPro reserves the right to suspend or terminate accounts that
          violate these Terms, misuse the service, or engage in fraudulent
          activity. Terminated accounts will lose access to saved reports and
          subscription benefits without refund, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          9. Governing Law
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          These Terms are governed by and interpreted in accordance with the
          laws of the European Union. Any disputes arising from the use of
          CVCheckPro shall be resolved under applicable EU and international
          digital service regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          10. Contact Information
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          If you have questions about these Terms of Service, please contact us
          at{' '}
          <a
            href="mailto:legal@cvcheckpro.com"
            className="text-black font-medium hover:underline"
          >
            legal@cvcheckpro.com
          </a>
          . Our team is available to address any legal or compliance concerns
          promptly.
        </p>

        <p className="text-sm text-slate-500 mt-10 italic">
          Last updated: November 2025
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
