import LegalLayout from "../components/LegalLayout";
import { cookieData } from "../data/cookie";

export default function CookiePolicy() {
  return (
    <LegalLayout title={cookieData.title} updated="April 28, 2026">
      {cookieData.intro.map((para, idx) => {
        if (para.includes("https://havantar.studio/")) {
          const parts = para.split("https://havantar.studio/");
          return (
            <p key={idx}>
              {parts[0]}
              <a href="https://havantar.studio/" className="underline">
                https://havantar.studio/
              </a>
              {parts[1]}
            </p>
          );
        }
        return <p key={idx}>{para}</p>;
      })}

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">What are cookies?</h3>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, HavAntar Studio) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., interactive content and analytics). The parties that set these third-party cookies can recognize your device both when it visits the website in question and also when it visits certain other websites.
      </p>

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Why do we use cookies?</h3>
      <p>
        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties. Third parties serve cookies through our website for analytics, advertising, and other purposes.
      </p>

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Types of cookies we use</h3>
      <p>
        The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
      </p>

      {cookieData.cookieTypes.map((type, idx) => (
        <div key={idx} className="mt-4">
          <h4 className="font-semibold text-[#4F4742]">{type.title}</h4>
          <p>{type.description}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Purpose:</strong> {type.details.purpose}
            </li>
            <li>
              <strong>Provider:</strong> {type.details.provider}
            </li>
          </ul>
        </div>
      ))}

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">How can I control cookies?</h3>
      <p>{cookieData.controlIntro}</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        {cookieData.browsers.map((browser, idx) => (
          <li key={idx}>
            <a href={browser.url} target="_blank" rel="noreferrer" className="underline">
              {browser.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" className="underline">
          AboutAds Choices
        </a>{" "}
        or{" "}
        <a href="https://www.youronlinechoices.com/" target="_blank" rel="noreferrer" className="underline">
          Your Online Choices
        </a>
        .
      </p>

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">{cookieData.outroHeader}</h3>
      <p>{cookieData.outroBody}</p>

      <h3 className="uppercase text-[13px] tracking-[0.12em] mt-8">Contact us</h3>
      <p>
        If you have any questions about our use of cookies or other technologies, please email us at:{" "}
        <a href={`mailto:${cookieData.contactEmail}`} className="underline">
          {cookieData.contactEmail}
        </a>
      </p>
    </LegalLayout>
  );
}
