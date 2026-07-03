export interface CookieProvider {
  purpose: string;
  provider: string;
}

export interface CookieType {
  title: string;
  description: string;
  details: CookieProvider;
}

export interface BrowserLink {
  name: string;
  url: string;
}

export interface CookiePolicyData {
  effectiveDate: string;
  title: string;
  intro: string[];
  cookieTypes: CookieType[];
  controlIntro: string;
  browsers: BrowserLink[];
  controlOutro: string;
  outroHeader: string;
  outroBody: string;
  contactEmail: string;
}

export const cookieData: CookiePolicyData = {
  effectiveDate: "Effective as: April 28, 2026",
  title: "Cookie Policy",
  intro: [
    "This Cookie Policy explains how HavAntar Studio (“we”, “us”, and “our”) uses cookies and similar technologies when you visit our website at https://havantar.studio/. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
    "In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our Privacy Policy applies in addition to this Cookie Policy.",
  ],
  cookieTypes: [
    {
      title: "1. Essential website cookies",
      description: "These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.",
      details: {
        purpose: "Used to maintain user sessions, prevent CSRF attacks, and store security/cookie consent preferences.",
        provider: "First-party (HavAntar Studio).",
      },
    },
    {
      title: "2. Analytics and customization cookies",
      description: "These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.",
      details: {
        purpose: "To understand traffic patterns, page views, and visitor demographics anonymously.",
        provider: "e.g., Google Analytics.",
      },
    },
    {
      title: "3. Advertising and targeting cookies",
      description: "These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.",
      details: {
        purpose: "Targeted marketing and retargeting ads.",
        provider: "Facebook Pixel, Google Ads (if applicable).",
      },
    },
  ],
  controlIntro: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Browser manufacturers allow you to configure cookie management through their settings. Please check your browser's help menu for more information:",
  browsers: [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Apple Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" },
  ],
  controlOutro: "In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit AboutAds Choices (https://www.aboutads.info/choices/) or Your Online Choices (https://www.youronlinechoices.com/).",
  outroHeader: "How often will we update this Cookie Policy?",
  outroBody: "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.",
  contactEmail: "hello@havantar.studio",
};
