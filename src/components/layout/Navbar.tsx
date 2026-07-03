import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LinkButton } from "@/components/ui/app-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F0EBE6]">
        <div className="mx-auto flex h-[68px] items-center justify-between px-4 md:px-4 lg:px-6 xl:px-8 max-w-[1600px]">
          {/* Left: nav (desktop) or brand (mobile) */}
          <div className="flex items-center gap-8 flex-1">
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="link-slide text-[14px] leading-[15px] font-medium uppercase text-[#4F4742]"
                >
                  <span className="base">{l.label}</span>
                  <span className="dup" aria-hidden>
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              to="/"
              className="lg:hidden text-[24px] leading-[26px] font-normal text-[#4F4742] whitespace-nowrap"
            >
              HavAntar Studio
            </Link>
          </div>

          {/* Center: brand (desktop only) */}
          <Link
            to="/"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-[22px] leading-[26px] font-normal text-[#4F4742]"
          >
            HavAntar Studio
          </Link>

          {/* Right: contact / hamburger */}
          <div className="flex items-center justify-end flex-1">
            <div className="hidden lg:block">
              <LinkButton to="/contact" variant="filled">
                Contact Us
              </LinkButton>
            </div>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            >
              <span
                className={cn(
                  "block h-[1.5px] w-6 bg-[#4F4742] transition-all duration-500",
                  open && "translate-y-[3.75px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-6 bg-[#4F4742] transition-all duration-500",
                  open && "translate-y-[-3.75px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 lg:hidden bg-[#F0EBE6] overflow-hidden transition-all duration-500 ease-[cubic-bezier(.7,0,.3,1)]",
          open ? "max-h-[calc(100vh-68px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-4 md:px-6 py-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[24px] leading-[26px] uppercase text-[#4F4742] font-medium underline-lr w-fit"
            >
              {l.label}
            </Link>
          ))}
          <LinkButton to="/contact" variant="filled" className="w-full md:w-fit mt-0 text-center">
            Contact Us
          </LinkButton>
        </nav>
      </div>
    </>
  );
}
