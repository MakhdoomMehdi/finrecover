import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Debt Collection Compliance Policy",
  description: "Fin Recover's Debt Collection Compliance Policy — our standards for ethical, legal, and fair debt recovery practices.",
  path: "/legal/debt-collection-compliance",
});

export default function DebtCollectionCompliancePage() {
  return (
    <LegalLayout title="Debt Collection Compliance Policy" lastUpdated="November 2024">
      <h2>1. Purpose and Commitment</h2>
      <p>
        Fin Recover (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) is committed to conducting all debt collection activities in a manner that is lawful, ethical, respectful, and compliant with applicable regulations. This Debt Collection Compliance Policy establishes the standards that all Fin Recover employees, agents, and contractors must adhere to when engaging in recovery activities on behalf of our clients.
      </p>
      <p>
        We believe that ethical collections build long-term trust — for our clients, for the financial sector, and for the debtors we contact. Aggressive or abusive practices are not only unethical but counterproductive: they damage client reputations and reduce recovery outcomes.
      </p>

      <h2>2. Regulatory Framework</h2>
      <p>Our collections operations are conducted in compliance with applicable legislation, including but not limited to:</p>
      <ul>
        <li>The State Bank of Pakistan (SBP) prudential regulations and consumer protection circulars;</li>
        <li>The Securities and Exchange Commission of Pakistan (SECP) guidelines for non-bank financial institutions;</li>
        <li>The Prevention of Electronic Crimes Act (PECA) 2016 — digital communications;</li>
        <li>The Consumer Protection Act (applicable provincial legislation);</li>
        <li>International best practices including GDPR and ISO 27001 (where applicable to cross-border portfolios).</li>
      </ul>

      <h2>3. Prohibited Practices</h2>
      <p>Fin Recover agents are strictly prohibited from:</p>
      <ul>
        <li>Using or threatening violence, harassment, or abusive language of any kind;</li>
        <li>Making false or misleading representations about the amount owed, legal consequences, or our identity;</li>
        <li>Contacting debtors at unreasonable hours (outside 8:00 AM – 8:00 PM local time, unless the debtor has consented);</li>
        <li>Contacting third parties (family, friends, employers) about the debt without the debtor&#39;s prior consent, except as permitted by law;</li>
        <li>Threatening legal action that Fin Recover or its clients do not intend to take;</li>
        <li>Collecting fees or interest not authorised by the original credit agreement;</li>
        <li>Continuing to contact debtors who have submitted a written request to cease communication, except as required by law;</li>
        <li>Disclosing debt information to unauthorised third parties.</li>
      </ul>

      <h2>4. Required Practices</h2>
      <p>All Fin Recover collection agents must:</p>
      <ul>
        <li>Identify themselves clearly and accurately at the outset of every contact;</li>
        <li>Disclose that the communication is from a debt collector if required;</li>
        <li>Treat all debtors with dignity and respect, regardless of the amount or nature of the debt;</li>
        <li>Provide accurate information about the debt and available repayment options;</li>
        <li>Refer any debtor expressing financial hardship to our dedicated hardship support pathway;</li>
        <li>Record all debtor interactions accurately in the Fin Recover CRM system;</li>
        <li>Obtain proper authorisation before accepting any payment arrangement;</li>
        <li>Provide written confirmation of any agreed payment plan within 24 hours.</li>
      </ul>

      <h2>5. Vulnerable Debtor Policy</h2>
      <p>
        Fin Recover maintains heightened protections for debtors who may be vulnerable, including those experiencing:
      </p>
      <ul>
        <li>Mental health difficulties;</li>
        <li>Serious illness or bereavement;</li>
        <li>Financial crisis or insolvency;</li>
        <li>Communication difficulties (language barriers, disabilities).</li>
      </ul>
      <p>
        Agents are trained to identify indicators of vulnerability and must escalate such cases to a senior supervisor. Collections activity on vulnerable accounts may be paused pending appropriate support referrals. We maintain a register of identified vulnerable debtors and apply enhanced protocols accordingly.
      </p>

      <h2>6. Training and Certification</h2>
      <p>
        All Fin Recover collection agents receive mandatory compliance training prior to making any debtor contact. Training covers:
      </p>
      <ul>
        <li>Applicable regulatory requirements;</li>
        <li>Prohibited and required practices;</li>
        <li>Vulnerable debtor identification and handling;</li>
        <li>Script compliance and call handling standards;</li>
        <li>Hardship protocols and payment arrangement authorisation levels.</li>
      </ul>
      <p>
        Agents are assessed annually and must pass compliance evaluations to maintain active status. All training records are maintained and available for client and regulatory audit.
      </p>

      <h2>7. Quality Assurance and Monitoring</h2>
      <p>Fin Recover implements a rigorous QA programme including:</p>
      <ul>
        <li>Call recording for all outbound and inbound contacts;</li>
        <li>Random sampling: at least 10% of all calls are reviewed monthly by QA supervisors;</li>
        <li>Targeted reviews following any complaint or escalation;</li>
        <li>Monthly compliance scoring reported to clients;</li>
        <li>Quarterly external compliance audits.</li>
      </ul>

      <h2>8. Complaints Handling</h2>
      <p>
        Debtors who wish to lodge a complaint about Fin Recover&#39;s conduct may do so by contacting:
      </p>
      <ul>
        <li>Email: <a href="mailto:complaints@finrecover.com">complaints@finrecover.com</a></li>
        <li>Phone: via our dedicated complaints line</li>
      </ul>
      <p>
        All complaints are acknowledged within 24 hours and resolved within 10 business days. Unresolved complaints may be escalated to the relevant client or regulatory authority. Fin Recover maintains a complaints register reviewed monthly by senior management.
      </p>

      <h2>9. Policy Enforcement</h2>
      <p>
        Violations of this Compliance Policy are treated as serious disciplinary matters. Depending on the nature and severity of the breach, consequences may include formal warning, suspension, or immediate termination of employment. Fin Recover operates a confidential whistleblowing channel for reporting compliance concerns without fear of retaliation.
      </p>

      <h2>10. Policy Review</h2>
      <p>
        This policy is reviewed annually and updated as required following regulatory changes, audit findings, or operational developments. All revisions are communicated to relevant staff and clients.
      </p>
    </LegalLayout>
  );
}
