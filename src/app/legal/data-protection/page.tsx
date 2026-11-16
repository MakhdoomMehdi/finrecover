import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Data Protection & Security Policy",
  description: "Learn about Fin Recover's data protection and security standards — how we safeguard client and debtor data.",
  path: "/legal/data-protection",
});

export default function DataProtectionPage() {
  return (
    <LegalLayout title="Data Protection & Security Policy" lastUpdated="November 2024">
      <h2>1. Policy Statement</h2>
      <p>
        Fin Recover (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) is committed to protecting the security and integrity of all personal and business data processed in the course of our operations. This Data Protection and Security Policy sets out the technical and organisational controls we maintain to prevent unauthorised access, data breaches, and misuse of information.
      </p>

      <h2>2. Scope</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>All Fin Recover employees, contractors, and third-party service providers;</li>
        <li>All data systems, databases, applications, and networks operated by or on behalf of PBS;</li>
        <li>All personal data and confidential business information processed in connection with our services.</li>
      </ul>

      <h2>3. Data Classification</h2>
      <p>Fin Recover classifies data into the following tiers:</p>
      <ul>
        <li><strong>Confidential:</strong> Client debtor portfolios, financial data, strategic business information — highest protection, strictly need-to-know access;</li>
        <li><strong>Internal:</strong> Operational data, internal communications, process documentation — restricted to Fin Recover employees;</li>
        <li><strong>Public:</strong> Marketing materials, published website content — freely accessible.</li>
      </ul>

      <h2>4. Technical Security Controls</h2>
      <p>We implement the following technical measures:</p>
      <ul>
        <li><strong>Encryption:</strong> All data in transit is encrypted using TLS 1.2 or higher. Sensitive data at rest is encrypted using AES-256 or equivalent standards;</li>
        <li><strong>Access Controls:</strong> Role-based access control (RBAC) ensures employees access only the data necessary for their role. Privileged access is logged and reviewed;</li>
        <li><strong>Multi-Factor Authentication (MFA):</strong> Required for all systems containing client or debtor data;</li>
        <li><strong>Network Security:</strong> Firewalls, intrusion detection systems (IDS), and network segmentation are deployed across all production environments;</li>
        <li><strong>Vulnerability Management:</strong> Regular penetration testing and vulnerability scans are conducted. Critical vulnerabilities are patched within 48 hours;</li>
        <li><strong>Endpoint Protection:</strong> All devices are managed with enterprise endpoint protection, remote wipe capability, and disk encryption;</li>
        <li><strong>Backup &amp; Recovery:</strong> Data is backed up daily with offsite replication. Recovery time objectives (RTOs) and recovery point objectives (RPOs) are tested quarterly.</li>
      </ul>

      <h2>5. Organisational Security Controls</h2>
      <ul>
        <li><strong>Security Training:</strong> All employees complete mandatory data security awareness training upon joining and annually thereafter;</li>
        <li><strong>Background Checks:</strong> All employees with access to client or debtor data undergo background verification prior to employment;</li>
        <li><strong>Clean Desk Policy:</strong> Confidential materials must not be left unattended in workspaces;</li>
        <li><strong>Incident Response:</strong> Fin Recover maintains a documented incident response plan. Security incidents are assessed within 1 hour and contained within 24 hours;</li>
        <li><strong>Third-Party Assessments:</strong> All third-party vendors with access to Fin Recover data must complete a security assessment and sign a Data Processing Agreement;</li>
        <li><strong>Audit Logging:</strong> Access to sensitive systems is logged and reviewed monthly by our security team.</li>
      </ul>

      <h2>6. Data Breach Response</h2>
      <p>In the event of a confirmed data breach, Fin Recover will:</p>
      <ul>
        <li>Immediately contain the breach and assess its scope;</li>
        <li>Notify affected Clients within 24 hours of becoming aware of a breach involving their data;</li>
        <li>Where required by law, notify relevant supervisory authorities within 72 hours;</li>
        <li>Conduct a root-cause analysis and implement corrective measures;</li>
        <li>Provide a full written report to affected Clients within 14 days.</li>
      </ul>

      <h2>7. Physical Security</h2>
      <p>Our offices and data processing facilities maintain:</p>
      <ul>
        <li>Controlled physical access with access logging;</li>
        <li>CCTV monitoring of all data processing areas;</li>
        <li>Secure destruction of physical documents containing personal or confidential data.</li>
      </ul>

      <h2>8. Cloud and Infrastructure Security</h2>
      <p>
        Where Fin Recover uses cloud infrastructure, we select only reputable providers with industry-standard certifications (e.g. ISO 27001, SOC 2). Data residency requirements are assessed and documented for each client engagement. All cloud environments are configured in accordance with provider security best-practice benchmarks.
      </p>

      <h2>9. Policy Review</h2>
      <p>
        This policy is reviewed annually or following any significant security incident or regulatory change. The latest version is always available on our website.
      </p>

      <h2>10. Contact</h2>
      <p>
        Security concerns should be reported to: <a href="mailto:security@finrecover.com">security@finrecover.com</a>
      </p>
    </LegalLayout>
  );
}
