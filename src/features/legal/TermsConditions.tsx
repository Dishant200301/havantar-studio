import LegalLayout from "./LegalLayout";

export default function TermsConditions() {
  return (
    <LegalLayout title="Terms & Conditions" updated="January 2026">
      <p>By accessing and using this website, you accept and agree to be bound by the following terms and conditions.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Use of content</h3>
      <p>All content on this site, including images, text and project documentation, is the intellectual property of HavAntar Studio and may not be reproduced without permission.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Services</h3>
      <p>All service engagements are governed by a separate written agreement between HavAntar Studio and the client.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Limitation of liability</h3>
      <p>HavAntar Studio is not liable for any indirect, incidental or consequential damages arising from the use of this website.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Governing law</h3>
      <p>These terms are governed by the laws of the United Arab Emirates.</p>
    </LegalLayout>
  );
}
