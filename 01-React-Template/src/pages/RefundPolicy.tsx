import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          Refund Policy
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          At <strong>CVCheckPro</strong>, we aim to provide a high-quality,
          automated resume optimization experience powered by AI. We understand
          that sometimes technical issues or misunderstandings can occur, and we
          want every customer to feel confident in their purchase. This Refund
          Policy outlines the conditions under which refunds may be granted.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          1. Subscription Cancellations
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          All active subscriptions (monthly, quarterly, or annual) can be
          cancelled at any time through your account dashboard. Once
          cancellation is initiated, your plan remains active until the end of
          the current billing cycle. Future payments will not be processed after
          cancellation.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          2. Eligibility for Refunds
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Refunds are available for users who encounter verified technical
          issues that prevent the use of our service. Eligible cases include:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 leading-relaxed">
          <li>Failed or incomplete resume uploads due to platform errors.</li>
          <li>AI report not generated despite successful payment.</li>
          <li>System malfunction that prevents access to purchased reports.</li>
        </ul>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Refunds cannot be issued if the product or service has already been
          fully delivered (for example, when the AI analysis report has been
          successfully generated and viewed). However, we always aim to resolve
          each issue individually and fairly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          3. How to Request a Refund
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          To request a refund, please contact our support team within{' '}
          <strong>7 days of the original purchase date</strong> by emailing{' '}
          <a
            href="mailto:support@cvcheckpro.com"
            className="text-black font-medium hover:underline"
          >
            support@cvcheckpro.com
          </a>
          . Include your order number, the email used for purchase, and a brief
          description of the issue you experienced. Our team will review your
          request within 48 hours and respond with next steps.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          4. Non-Refundable Situations
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Refunds will not be issued under the following circumstances:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 leading-relaxed">
          <li>
            Dissatisfaction with AI recommendations when the service functioned
            as intended.
          </li>
          <li>
            User error, such as uploading an incorrect file format or submitting
            a blank document.
          </li>
          <li>
            Technical issues caused by unstable internet connection, browser
            extensions, or local device configuration.
          </li>
          <li>Change of mind after the completion of a report or download.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          5. Refund Processing Time
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Approved refunds will be processed within 5–10 business days,
          depending on your payment method and bank. Refunds are always issued
          to the original payment source used for the transaction. We do not
          provide cash or alternative refunds under any circumstances.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          6. Service Credits and Alternatives
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          In cases where a refund cannot be provided, we may offer service
          credits or additional analysis sessions as compensation. Credits can
          be used within 90 days and are non-transferable. Our goal is to ensure
          that every customer receives full value for their payment.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
          7. Contact and Support
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          For any billing or refund inquiries, please reach out to our support
          department at{' '}
          <a
            href="mailto:support@cvcheckpro.com"
            className="text-black font-medium hover:underline"
          >
            support@cvcheckpro.com
          </a>
          . Our team is available Monday through Friday, 9:00–18:00 (GMT+2), and
          typically responds within one business day.
        </p>

        <p className="text-sm text-slate-500 mt-10 italic">
          Last updated: November 2025
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
