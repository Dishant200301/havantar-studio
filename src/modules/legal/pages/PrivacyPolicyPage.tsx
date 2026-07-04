import LegalLayout from "../components/LegalLayout";
import { privacyData } from "../data/privacy";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title={privacyData.title} updated="April 28, 2026">
      <p>
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
        <a href="https://havantar.studio/" className="underline">
          https://havantar.studio/
        </a>
        , make a purchase, or use our services.
      </p>

      {privacyData.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">{section.title}</h3>
          <div className="space-y-4 mt-2">
            {section.body.map((item, itemIdx) => {
              if (typeof item === "string") {
                if (item.includes("hello@havantar.studio")) {
                  const parts = item.split("hello@havantar.studio");
                  return (
                    <p key={itemIdx}>
                      {parts[0]}
                      <a href="mailto:hello@havantar.studio" className="underline">
                        hello@havantar.studio
                      </a>
                      {parts[1]}
                    </p>
                  );
                }
                return <p key={itemIdx}>{item}</p>;
              } else if (item && item.type === "list") {
                return (
                  <ul key={itemIdx} className="list-disc pl-5 space-y-1">
                    {item.items.map((listItem, listIdx) => (
                      <li key={listIdx}>{listItem}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </LegalLayout>
  );
}
