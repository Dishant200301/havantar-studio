import LegalLayout from "./LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 2026">
      <p>HavAntar Studio ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share with us.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Information we collect</h3>
      <p>We collect information you voluntarily provide via our contact form, such as your name, email address, phone number and project details.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">How we use your information</h3>
      <p>Your information is used solely to respond to enquiries, discuss potential collaborations and provide requested design services.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Data sharing</h3>
      <p>We do not sell, trade or otherwise transfer your personal information to third parties without your consent, except as required to deliver our services or by law.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Contact</h3>
      <p>For any privacy questions, please email hello@havantar.studio.</p>
    </LegalLayout>
  );
}
