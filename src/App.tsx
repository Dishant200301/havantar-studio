import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
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

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

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

  // Handle anchor/hash scroll via Lenis
  useEffect(() => {
    if (!lenisRef.current) return;

    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          lenisRef.current?.scrollTo(el, {
            offset: -68, // Offset to prevent covering by Navbar
            duration: 1.2,
          });
        }
      });
    }
  }, [location.hash]);

  // Handle immediate scroll reset only when clicking a link to the same page
  useEffect(() => {
    if (prevPathname.current === location.pathname && !location.hash) {
      lenisRef.current?.scrollTo(0, { immediate: true });
    }
    prevPathname.current = location.pathname;
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="relative">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            window.scrollTo(0, 0);
            lenisRef.current?.scrollTo(0, { immediate: true });
            ScrollTrigger.refresh();
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/projects/:slug" element={<PageTransition><ProjectDetailsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
            <Route path="/terms-and-conditions" element={<PageTransition><TermsConditions /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

