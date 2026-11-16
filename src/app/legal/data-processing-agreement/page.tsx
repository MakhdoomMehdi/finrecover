import type { Metadata } from "next";
import { Download, FileText, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Data Processing Agreement",
  description: "Download the Fin Recover Data Processing Agreement (DPA) for clients requiring a formal data processing contract.",
  path: "/legal/data-processing-agreement",
});

export default function DataProcessingAgreementPage() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      lastUpdated="November 2024"
      downloadable={true}
      downloadPath="/docs/Data_Processing_Agreement.pdf"
    >
      <div className="not-prose mb-8">
        <div className="bg-sky-light/15 border border-sky-mid/20 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-sky-mid/15 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-sky-mid" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-navy text-base mb-1">Download This Agreement</h3>
            <p className="text-navy/80 text-sm mb-4">
              The Data Processing Agreement (DPA) is available as a signed PDF. Download the document, review it with your legal team, and return a countersigned copy to initiate our data processing relationship.
            </p>
            <a
              href="/docs/Data_Processing_Agreement.pdf"
              download="PBS_Data_Processing_Agreement.pdf"
              className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-amber hover:text-navy transition-all duration-200 shadow-md text-sm"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="not-prose mb-8">
        <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-navy font-semibold text-sm mb-1">Who Needs This Agreement?</p>
            <p className="text-navy/80 text-sm">
              This DPA is required for all clients who transfer personal data to Fin Recover in connection with recovery, BPO, or CRM services — particularly where the client acts as a data controller and Fin Recover acts as a data processor under GDPR or equivalent legislation. If you are unsure whether this applies to your engagement, please contact our Legal team.
            </p>
          </div>
        </div>
      </div>

      <h2>Overview of the Data Processing Agreement</h2>
      <p>
        The Fin Recover Data Processing Agreement (DPA) is a legally binding contract that governs the terms under which Fin Recover processes personal data on behalf of its clients (the &#34;Controller&#34;). The DPA establishes the rights and obligations of both parties with respect to data protection law.
      </p>

      <h2>What the DPA Covers</h2>

      <h3>Subject Matter and Duration</h3>
      <p>
        The DPA applies for the duration of any active service agreement between the client and Fin Recover. It governs all processing of personal data carried out by Fin Recover in connection with contracted services — including debt recovery, BPO operations, CRM platform usage, and consultancy work involving personal data.
      </p>

      <h3>Nature and Purpose of Processing</h3>
      <p>
        Fin Recover processes personal data solely for the purpose of delivering contracted services. The DPA specifies the categories of data subjects (debtors, borrowers, customers), categories of personal data (contact details, financial data, account information), and the specific processing activities (outreach, payment processing, reporting).
      </p>

      <h3>Processor Obligations</h3>
      <p>Under the DPA, Fin Recover (as data processor) agrees to:</p>
      <ul>
        <li>Process personal data only on documented instructions from the controller;</li>
        <li>Ensure that all persons authorised to process the data are bound by confidentiality;</li>
        <li>Implement appropriate technical and organisational security measures;</li>
        <li>Obtain prior written consent before engaging sub-processors;</li>
        <li>Assist the controller in fulfilling data subject rights requests;</li>
        <li>Delete or return all personal data upon termination of the agreement;</li>
        <li>Provide all information necessary to demonstrate compliance and facilitate audits.</li>
      </ul>

      <h3>Sub-Processing</h3>
      <p>
        A list of approved sub-processors (technology infrastructure providers, cloud hosting, communications platforms) is appended to the DPA. Clients will be notified of any intended changes to sub-processors and have the right to object.
      </p>

      <h3>Data Transfers</h3>
      <p>
        The DPA includes appropriate provisions for international data transfers, including Standard Contractual Clauses where applicable, ensuring personal data is protected to the same standard regardless of where it is processed.
      </p>

      <h3>Security and Breach Notification</h3>
      <p>
        Fin Recover commits to maintaining security standards aligned with its Data Protection &amp; Security Policy. In the event of a personal data breach, Fin Recover will notify the controller without undue delay and no later than 24 hours after becoming aware of it.
      </p>

      <h2>How to Execute the DPA</h2>
      <ol>
        <li>Download the PDF using the button above;</li>
        <li>Review the agreement with your legal and compliance team;</li>
        <li>Sign and date the DPA (electronic signature accepted);</li>
        <li>Return the countersigned copy to <a href="mailto:legal@finrecover.com">legal@finrecover.com</a>;</li>
        <li>Fin Recover will countersign and return a fully executed copy within 5 business days.</li>
      </ol>

      <h2>Questions</h2>
      <p>
        For questions about the DPA or data processing arrangements, contact our Legal &amp; Compliance team at <a href="mailto:legal@finrecover.com">legal@finrecover.com</a>.
      </p>
    </LegalLayout>
  );
}
