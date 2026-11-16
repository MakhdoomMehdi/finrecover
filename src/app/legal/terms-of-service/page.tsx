import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Fin Recover. These terms govern your use of our services, website, and engagement agreements.",
  path: "/legal/terms-of-service",
  noIndex: false,
});

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="November 2024">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the services provided by Fin Recover (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;), you agree to be bound by these Terms of Service (&#34;Terms&#34;). If you do not agree to all of these Terms, please do not use our services. These Terms apply to all visitors, users, and others who access or use our website and services.
      </p>

      <h2>2. Description of Services</h2>
      <p>
        Fin Recover provides the following services to business clients (&#34;Clients&#34;):
      </p>
      <ul>
        <li><strong>Loan Recovery &amp; Debt Handling:</strong> End-to-end debt recovery solutions for financial institutions, including pre-legal and legal recovery, debtor tracing, and portfolio management.</li>
        <li><strong>Workforce Outsourcing (BPO):</strong> Managed contact-centre and back-office staffing services, including agent recruitment, training, quality assurance, and operations management.</li>
        <li><strong>Automated Recovery &amp; CRM Systems:</strong> Technology solutions for digital lenders, including omnichannel automated workflows, CRM configuration and integration, and predictive analytics.</li>
        <li><strong>Business Consultancy:</strong> Strategic advisory services for financial institutions on portfolio strategy, compliance, operational efficiency, and technology road-mapping.</li>
      </ul>

      <h2>3. Client Obligations</h2>
      <p>Clients engaging Fin Recover services agree to:</p>
      <ul>
        <li>Provide accurate and complete information necessary for the delivery of services;</li>
        <li>Ensure that any debt portfolios submitted for recovery are legally valid, properly documented, and compliant with applicable law;</li>
        <li>Not use Fin Recover services for any unlawful purpose or in violation of any applicable regulation;</li>
        <li>Maintain the confidentiality of any access credentials, systems, or proprietary tools provided by PBS;</li>
        <li>Promptly notify Fin Recover of any changes that may affect service delivery or regulatory compliance.</li>
      </ul>

      <h2>4. Payment Terms</h2>
      <p>
        Payment terms are set out in individual engagement agreements and Service Level Agreements (SLAs) executed between Fin Recover and each Client. Unless otherwise agreed in writing:
      </p>
      <ul>
        <li>Recovery service fees are typically structured as a percentage of amounts successfully recovered;</li>
        <li>BPO and technology fees are billed monthly in advance;</li>
        <li>Consultancy fees are billed as agreed in the engagement letter, typically milestone-based or time-and-materials;</li>
        <li>All invoices are payable within 30 days of issuance unless otherwise specified;</li>
        <li>Late payments may attract interest at the rate of 2% per month on overdue amounts.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All technology platforms, methodologies, processes, tools, training materials, and intellectual property developed or owned by Fin Recover remain the sole property of Fin Recover. Clients are granted a limited, non-exclusive licence to use Fin Recover technology solely for the purpose of receiving the contracted services. No assignment of intellectual property rights is implied or granted unless explicitly stated in writing.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        Both parties agree to maintain the confidentiality of all proprietary information, business data, debtor information, client portfolios, and any other information designated as confidential. Confidential information shall not be disclosed to third parties without prior written consent, except as required by law or regulation. This obligation shall survive the termination of any service agreement for a period of five (5) years.
      </p>

      <h2>7. Data Protection</h2>
      <p>
        Fin Recover processes personal data in accordance with our Privacy Policy and applicable data protection laws including, where applicable, the General Data Protection Regulation (GDPR) and the Pakistan Electronic Crimes Act. Where Fin Recover processes personal data on behalf of a Client, the parties shall execute a Data Processing Agreement. Clients warrant that they have all necessary consents and legal bases for sharing debtor personal data with Fin Recover.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Fin Recover&#39;s total liability to any Client in connection with any service shall not exceed the total fees paid by that Client in the three (3) months preceding the event giving rise to the liability. Fin Recover shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or business interruption, even if Fin Recover has been advised of the possibility of such damages.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        Clients agree to indemnify, defend, and hold harmless Fin Recover and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from: (i) Client&#39;s breach of these Terms; (ii) Client&#39;s violation of any law or third-party rights; (iii) inaccurate or incomplete information provided to PBS; or (iv) any claim that Client&#39;s data or instructions infringed a third party&#39;s rights.
      </p>

      <h2>10. Termination</h2>
      <p>
        Either party may terminate a service engagement in accordance with the notice provisions set out in the applicable service agreement. Fin Recover reserves the right to immediately suspend or terminate services where: (i) a Client breaches any material term of these Terms or the service agreement; (ii) Fin Recover reasonably suspects fraudulent or illegal activity; or (iii) continued service would expose Fin Recover to legal, regulatory, or reputational risk.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan, unless otherwise agreed in the applicable service agreement.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        Fin Recover reserves the right to update these Terms from time to time. Material changes will be notified to active Clients in writing at least 30 days prior to taking effect. Continued use of Fin Recover services following the effective date of any amendment constitutes acceptance of the revised Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        For questions about these Terms, please contact us at <a href="mailto:legal@finrecover.com">legal@finrecover.com</a>.
      </p>
    </LegalLayout>
  );
}
