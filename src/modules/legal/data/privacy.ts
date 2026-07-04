export interface BulletList {
  type: "list";
  items: string[];
}

export type SectionBodyItem = string | BulletList;

export interface PrivacySection {
  title: string;
  body: SectionBodyItem[];
}

export interface PrivacyPolicyData {
  category: string;
  effectiveDate: string;
  title: string;
  intro: string;
  sections: PrivacySection[];
  seoDescription: string;
}

export const privacyData: PrivacyPolicyData = {
  category: "privacy",
  effectiveDate: "Effective as: April 28, 2026",
  title: "Privacy Policy",
  intro:
    "We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://havantar.studio/, make a purchase, or use our services.",
  seoDescription: "How HavAntar Studio collects, uses, and protects your information.",
  sections: [
    {
      title: "Information we collect",
      body: [
        "We may collect the following types of information:",
        {
          type: "list",
          items: [
            "Personal Information: Name, email address, phone number, billing and shipping address, payment information.",
            "Account Information: Username, password, and order history.",
            "Transaction Data: Purchases, returns, and payment methods.",
            "Technical Data: IP address, browser type, operating system, and website usage details.",
            "Cookies and Tracking Technologies: We may use cookies, web beacons, and similar technologies to enhance user experience and analyze website performance.",
          ],
        },
      ],
    },
    {
      title: "How we use your information",
      body: [
        "We use the collected data to:",
        {
          type: "list",
          items: [
            "Process orders and payments.",
            "Provide customer support.",
            "Improve website functionality and user experience.",
            "Send promotional offers, newsletters, or updates (you can opt out anytime).",
            "Detect fraudulent transactions and enhance security.",
            "Comply with legal and regulatory requirements.",
          ],
        },
      ],
    },
    {
      title: "Sharing of information",
      body: [
        "We do not sell or rent your personal information. However, we may share data with:",
        {
          type: "list",
          items: [
            "Service providers: Payment processors, shipping companies, and IT support.",
            "Legal authorities: When required by law or to protect our rights.",
            "Marketing and advertising partners: For targeted ads (with user consent where required).",
          ],
        },
      ],
    },
    {
      title: "Data security",
      body: [
        "We implement security measures such as encryption, secure servers, and access controls to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection.",
      ],
    },
    {
      title: "Your rights & choices",
      body: [
        "You have the right to:",
        {
          type: "list",
          items: [
            "Access, correct, or delete your personal data.",
            "Opt-out of marketing communications.",
            "Disable cookies via browser settings.",
            "Request a copy of the data we hold about you.",
          ],
        },
      ],
    },
    {
      title: "Third-party links",
      body: [
        "Our website may contain links to third-party sites. We are not responsible for their privacy practices, and we encourage you to review their policies.",
      ],
    },
    {
      title: "Children’s privacy",
      body: [
        "Our website is not intended for children under 13. We do not knowingly collect personal data from minors.",
      ],
    },
    {
      title: "Changes to this policy",
      body: [
        "We may update this policy from time to time. The latest version will always be posted on our website with the “Effective Date” at the top.",
      ],
    },
    {
      title: "Contact us",
      body: [
        "If you have any questions or concerns about this Privacy Policy, please contact us at: hello@havantar.studio",
      ],
    },
  ],
};
