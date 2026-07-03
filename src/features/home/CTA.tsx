import { motion } from "framer-motion";
import FadeIn from "@/components/common/FadeIn";
import { LinkButton } from "@/components/ui/app-button";

export default function CTA() {
  return (
    <section className="px-4 lg:px-8 xl:px-8 py-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
        className="relative rounded-2xl overflow-hidden h-[550px] lg:h-[600px] flex flex-col justify-between p-6 lg:p-8"
      >
        <img
          src="/images/common/CTA.webp"
          alt="Timeless Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/45 to-black/20 md:bg-linear-to-r md:from-black/75 md:via-black/35 md:to-black/10" />

        <FadeIn delay={0.2} className="relative w-full text-center lg:text-left md:max-w-[600px] mx-auto lg:mx-0 lg:max-w-[480px] text-[#F0EBE6]">
          <p className="font-display font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[31px] uppercase tracking-normal">
            "Architecture should speak of its time and place, but yearn for timelessness."
          </p>
          <div className="mt-4 font-display font-bold text-[12px] leading-[16px] text-white/58 uppercase tracking-[0.15em]">
            Frank Gehry
          </div>
        </FadeIn>

        <FadeIn delay={0.5} className="relative flex flex-row flex-wrap gap-3 justify-center lg:justify-end mt-8">
          <LinkButton to="/projects" variant="glass">View Projects</LinkButton>
          <LinkButton to="/contact" variant="light">Book Consultation</LinkButton>
        </FadeIn>
      </motion.div>
    </section>
  );
}
