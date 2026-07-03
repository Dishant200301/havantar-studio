import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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

function TypewriterText({ text, active }: { text: string; active: boolean }) {
  return (
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      animate={active ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
      className="overflow-hidden whitespace-nowrap inline-block text-[14px] text-[#4F4742] font-display ml-1"
    >
      {text}
    </motion.span>
  );
}

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <footer className="p-3">
      <div className="rounded-lg bg-[#E2DACF] overflow-hidden">
        <div className="px-4 md:px-8 lg:px-8 pt-14 pb-10 xl:pt-20 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[6fr_4fr] gap-12">
            <div>
              <h2 className="uppercase text-[#4F4742] font-display font-normal tracking-tight xl:max-w-xl text-[30px] sm:text-[40px] leading-[36px] sm:leading-[48px]">
                Open to new projects and collaborations that shape meaningful spaces.
              </h2>
              <Link
                to="/contact"
                className="underline-lr mt-8 inline-block uppercase font-display font-medium text-[18px] leading-[23px] text-[#4F4742]"
              >
                Get in touch
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 sm:gap-0 text-[14px] leading-[15px] font-display font-medium uppercase tracking-[0.08em] text-[#4F4742]/80">
              <div className="flex flex-col gap-3">
                {pageLinks.map((l) => (
                  <Link key={l.label} to={l.to}>
                    <SlideLink label={l.label} />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    <SlideLink label={l.label} />
                  </a>
                ))}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="flex flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:gap-3">
                  {legalLinks.map((l) => (
                    <Link key={l.label} to={l.to}>
                      <SlideLink label={l.label} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="my-16 h-px bg-[#f0ebe6]" />

          <div className="flex flex-col sm:flex-row gap-6 justify-between items-center sm:items-center text-[24px] text-[#4F4742]">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <a
                href="mailto:hello@havantar.studio"
                className="flex items-center text-[#4F4742] h-6"
                onMouseEnter={() => handleMouseEnter("mail")}
                onMouseLeave={handleMouseLeave}
              >
                <Mail className="w-6 h-6" />
                <TypewriterText text="hello@havantar.studio" active={hoveredItem === "mail"} />
              </a>

              <span className="text-[#4F4742]/20 select-none">|</span>

              <a
                href="tel:+9718123456789"
                className="flex items-center text-[#4F4742] h-6"
                onMouseEnter={() => handleMouseEnter("phone")}
                onMouseLeave={handleMouseLeave}
              >
                <Phone className="w-6 h-6" />
                <TypewriterText text="+971 812 3456 789" active={hoveredItem === "phone"} />
              </a>

              <span className="text-[#4F4742]/20 select-none">|</span>

              <a
                href="https://maps.google.com/?q=Dubai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-[#4F4742] h-6"
                onMouseEnter={() => handleMouseEnter("location")}
                onMouseLeave={handleMouseLeave}
              >
                <MapPin className="w-6 h-6" />
                <TypewriterText text="Dubai, UAE" active={hoveredItem === "location"} />
              </a>
            </div>

            <div className="opacity-60 text-center sm:text-right font-display text-[16px] w-full sm:w-auto">
              © {new Date().getFullYear()} HavAntar Studio. <br className="sm:hidden" />Developed by{" "}
              <a
                href="https://tryzeniq.com"
                target="_blank"
                rel="noreferrer"
                className="underline-lr hover:text-black font-medium"
              >
                TryzenIQ
              </a>
            </div>
          </div>
        </div>

        {/* Marquee brand */}
        <div className="overflow-hidden py-10">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="text-[#4F4742] font-display font-extrabold tracking-tight px-6 text-[80px] sm:text-[140px] md:text-[180px] xl:text-[240px] leading-[75px] sm:leading-[130px] md:leading-[170px] xl:leading-[230px]"
              >
                HavAntar Studio
              </span>
            ))}
          </div>
        </div>

        {/* Footer image */}
        <div className="aspect-[16/6] w-full overflow-hidden">
          <img
            src="/images/common/footer.webp"
            alt="HavAntar Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
