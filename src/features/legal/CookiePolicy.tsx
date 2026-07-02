import LegalLayout from "./LegalLayout";

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updated="January 2026">
      <p>This Cookie Policy explains how HavAntar Studio uses cookies and similar technologies when you visit our website.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">What cookies are</h3>
      <p>Cookies are small text files placed on your device to make websites work efficiently and to provide reporting information.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">How we use cookies</h3>
      <p>We use essential cookies for site functionality and anonymous analytics cookies to understand how visitors interact with our site.</p>
      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Managing cookies</h3>
      <p>You can control and disable cookies at any time through your browser settings. Disabling cookies may affect site functionality.</p>
    </LegalLayout>
  );
}
