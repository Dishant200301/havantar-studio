import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster } from "@/modules/core/components/ui/sonner";
import Navbar from "@/modules/core/components/Navbar";
import Footer from "@/modules/core/components/Footer";
import Home from "@/modules/home/pages/HomePage";
import ProjectsPage from "@/modules/projects/pages/ProjectsPage";
import ProjectDetailsPage from "@/modules/projects/pages/ProjectDetailsPage";
import ContactPage from "@/modules/contact/pages/ContactPage";
import PrivacyPolicy from "@/modules/legal/pages/PrivacyPolicyPage";
import CookiePolicy from "@/modules/legal/pages/CookiePolicyPage";
import TermsConditions from "@/modules/legal/pages/TermsConditionsPage";
import NotFound from "@/modules/core/pages/NotFoundPage";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis with smooth options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out-expo
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync ScrollTrigger position updates with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Bind Lenis animation loop to GSAP optimized ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Handle scroll resets and anchors via Lenis when routing changes
  useEffect(() => {
    if (!lenisRef.current) return;

    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          lenisRef.current?.scrollTo(el, {
            offset: -68, // Offset to prevent covering byNavbar
            duration: 1.2,
          });
        }
      });
    } else {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

