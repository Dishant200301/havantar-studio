import LegalLayout from "../components/LegalLayout";
import { termsData } from "../data/terms";

export default function TermsConditions() {
  return (
    <LegalLayout title={termsData.title} updated="April 28, 2026">
      {termsData.intro.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}

      {termsData.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">{section.title}</h3>
          <div className="space-y-4 mt-2">
            {section.body.map((item, itemIdx) => {
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
            })}
          </div>
        </div>
      ))}
    </LegalLayout>
  );
}
