import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Fin Recover — how we collect, use, and protect your personal data.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 2024">
      <h2>1. Introduction</h2>
      <p>
        Fin Recover (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you interact with our website, engage our services, or communicate with us.
      </p>
      <p>
        This Policy applies to all individuals whose data we process, including business contacts, website visitors, job applicants, and debtors whose data is processed on behalf of our clients.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, job title, and company name provided via our website forms, email, or in the course of service delivery.</li>
        <li><strong>Business Information:</strong> Company details, financial information, debt portfolio data, and account information provided by clients for service delivery purposes.</li>
        <li><strong>Debtor Information:</strong> As a data processor acting on behalf of our clients, we may process debtor names, contact details, loan account information, and payment history provided to us for recovery purposes.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data collected automatically via cookies and analytics tools.</li>
        <li><strong>Recruitment Data:</strong> CVs, work history, qualifications, and references submitted by job applicants.</li>
      </ul>

      <h2>3. Legal Basis for Processing</h2>
      <p>We process personal data on the following legal bases:</p>
      <ul>
        <li><strong>Contract:</strong> Where processing is necessary to perform a contract or take pre-contractual steps;</li>
        <li><strong>Legitimate Interests:</strong> For business development, fraud prevention, and improving our services;</li>
        <li><strong>Legal Obligation:</strong> Where processing is required to comply with applicable laws and regulations;</li>
        <li><strong>Consent:</strong> Where you have given specific consent for a particular use of your data.</li>
      </ul>

      <h2>4. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Deliver contracted recovery, BPO, CRM, and consultancy services;</li>
        <li>Communicate with clients, respond to enquiries, and provide support;</li>
        <li>Send relevant business communications, updates, and marketing materials (where consent has been given);</li>
        <li>Process debtor contact and payment recovery on behalf of our clients;</li>
        <li>Improve our website, services, and internal processes;</li>
        <li>Comply with legal, regulatory, and audit requirements;</li>
        <li>Assess job applications and manage the recruitment process.</li>
      </ul>

      <h2>5. Data Sharing and Disclosure</h2>
      <p>We may share personal data with:</p>
      <ul>
        <li><strong>Clients:</strong> Recovery outcomes, reporting, and account status updates as part of service delivery;</li>
        <li><strong>Service Providers:</strong> Technology partners, cloud hosting providers, and payment processors who assist in delivering our services, subject to appropriate data processing agreements;</li>
        <li><strong>Legal and Regulatory Authorities:</strong> Where required by law, court order, or regulatory requirement;</li>
        <li><strong>Professional Advisors:</strong> Lawyers, accountants, and auditors, subject to confidentiality obligations.</li>
      </ul>
      <p>We do not sell personal data to third parties for marketing purposes.</p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including:
      </p>
      <ul>
        <li>Client and debtor data: retained for the duration of the service engagement and up to 7 years thereafter for legal and audit purposes;</li>
        <li>Website visitor data: retained for up to 24 months from the date of collection;</li>
        <li>Recruitment data: retained for up to 12 months for unsuccessful applicants and for the duration of employment for successful applicants.</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>Subject to applicable law, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of personal data we hold about you;</li>
        <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data;</li>
        <li><strong>Erasure:</strong> Request deletion of your personal data where it is no longer necessary;</li>
        <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances;</li>
        <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format;</li>
        <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing purposes;</li>
        <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at <a href="mailto:privacy@finrecover.com">privacy@finrecover.com</a>. We will respond within 30 days.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience, analyse traffic, and serve relevant content. Essential cookies are necessary for the website to function. You may manage optional cookies through your browser settings. For more information, please refer to our Cookie Policy.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Where we transfer personal data to countries outside Pakistan, we ensure appropriate safeguards are in place, including Standard Contractual Clauses or equivalent mechanisms recognised under applicable law.
      </p>

      <h2>10. Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, or destruction. These include encryption, access controls, secure data centres, and regular security assessments. For more detail, please refer to our Data Protection &amp; Security Policy.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Where changes are material, we will notify clients and website users in advance. The &#34;Last Updated&#34; date at the top of this page indicates when the most recent changes were made.
      </p>

      <h2>12. Contact</h2>
      <p>
        For privacy-related enquiries, to exercise your rights, or to raise a concern, please contact our Data Protection Officer at: <a href="mailto:privacy@finrecover.com">privacy@finrecover.com</a>.
      </p>
    </LegalLayout>
  );
}
