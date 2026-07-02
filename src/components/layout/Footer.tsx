import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];
const socialLinks = [
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
];
const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

function SlideLink({ label }: { label: string }) {
  return (
    <span className="link-slide">
      <span className="base">{label}</span>
      <span className="dup" aria-hidden>
        {label}
      </span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="p-3">
      <div className="rounded-xl bg-[#E2DACF] overflow-hidden">
        <div className="px-6 md:px-12 lg:px-16 pt-14 pb-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
            <div>
              <h2 className="uppercase text-[#4F4742] font-medium leading-[1.05] tracking-tight text-[clamp(28px,4.5vw,56px)]">
                Open to new projects and collaborations that shape meaningful spaces.
              </h2>
              <Link
                to="/contact"
                className="underline-lr mt-8 inline-block uppercase text-[13px] tracking-[0.1em] text-[#4F4742]"
              >
                Get in touch
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[13px] uppercase tracking-[0.08em] text-[#4F4742]">
              <div className="flex flex-col gap-3">
                <div className="text-[11px] opacity-60">Pages</div>
                {pageLinks.map((l) => (
                  <Link key={l.label} to={l.to}>
                    <SlideLink label={l.label} />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[11px] opacity-60">Social</div>
                {socialLinks.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    <SlideLink label={l.label} />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[11px] opacity-60">Legal</div>
                {legalLinks.map((l) => (
                  <Link key={l.label} to={l.to}>
                    <SlideLink label={l.label} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-[#4F4742]/15" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-[13px] text-[#4F4742]">
            <a
              href="https://maps.google.com/?q=Dubai"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3"
            >
              <MapPin className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className="underline-lr">Dubai, UAE</span>
            </a>
            <a href="mailto:hello@havantar.studio" className="group flex items-center gap-3">
              <Mail className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className="underline-lr">hello@havantar.studio</span>
            </a>
            <a href="tel:+9718123456789" className="group flex items-center gap-3">
              <Phone className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className="underline-lr">+971 812 3456 789</span>
            </a>
            <div className="md:text-right opacity-60">
              © {new Date().getFullYear()} HavAntar Studio. All rights reserved.
            </div>
          </div>
        </div>

        {/* Marquee brand */}
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="text-[#4F4742] font-medium tracking-tight px-6"
                style={{ fontSize: "clamp(80px,14vw,220px)", lineHeight: 1 }}
              >
                HavAntar Studio •
              </span>
            ))}
          </div>
        </div>

        {/* Footer image */}
        <div className="ph aspect-[16/6] w-full" />
      </div>
    </footer>
  );
}
