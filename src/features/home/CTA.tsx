import { motion } from "framer-motion";
import FadeIn from "@/components/common/FadeIn";
import { LinkButton } from "@/components/ui/app-button";

export default function CTA() {
  return (
    <section className="px-6 lg:px-16 py-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
        className="relative rounded-2xl overflow-hidden min-h-[540px] flex flex-col justify-between p-8 lg:p-14"
      >
        <div className="absolute inset-0 ph" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-black/10" />

        <FadeIn delay={0.2} className="relative max-w-2xl text-[#F0EBE6]">
          <p className="uppercase tracking-tight" style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1 }}>
            "Architecture should speak of its time and place, but yearn for timelessness."
          </p>
          <div className="mt-4 uppercase text-[12px] tracking-[0.15em] opacity-80">— Frank Gehry</div>
        </FadeIn>

        <FadeIn delay={0.5} className="relative flex flex-col sm:flex-row gap-3 sm:justify-end mt-8">
          <LinkButton to="/contact" variant="filled">Book Consultation</LinkButton>
          <LinkButton to="/projects" variant="glass">View Projects</LinkButton>
        </FadeIn>
      </motion.div>
    </section>
  );
}
