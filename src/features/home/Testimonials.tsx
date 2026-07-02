import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "A game-changing experience for my growth.",
    body: "HavAntar delivered a home that feels perfectly balanced — every material, proportion and detail was considered.",
    name: "Layla Hassan",
    role: "Homeowner, Dubai",
  },
  {
    quote: "Precision and craft in every detail.",
    body: "Working with the studio felt genuinely collaborative — they shaped an office our team actually loves being in.",
    name: "Omar Al-Marzooqi",
    role: "Founder, North Ridge",
  },
  {
    quote: "Quiet, considered, timeless.",
    body: "The renovation transformed our villa completely while feeling like it had always been there.",
    name: "Sara Nuaimi",
    role: "Private Client",
  },
  {
    quote: "A studio you can trust end to end.",
    body: "From first sketch to handover, HavAntar delivered on time, on budget and beyond our expectations.",
    name: "Karim Fares",
    role: "Managing Director, Vera Retail",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="bg-[#F6F2EC] py-20 lg:py-28 px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(30px,5vw,60px)", lineHeight: 1.05 }}>What our clients say</span>
        </SplitHeading>
        <FadeIn delay={0.2} className="mt-4 uppercase text-[13px] tracking-[0.12em] text-[#7a706a]">
          Words from the people we build for
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="ph aspect-[4/5] rounded-xl"
            />
          </AnimatePresence>
        </motion.div>

        <div>
          <FadeIn className="flex gap-1 text-[#4F4742]">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="w-4 h-4 fill-current" />
            ))}
          </FadeIn>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mt-4 uppercase text-[#4F4742]" style={{ fontSize: "clamp(24px,3vw,38px)", lineHeight: 1.15 }}>
                {t.quote}
              </h3>
              <p className="mt-6 text-[#4F4742]/80 leading-relaxed max-w-lg">{t.body}</p>
              <div className="mt-8">
                <div className="uppercase text-[13px] tracking-[0.1em] text-[#4F4742]">{t.name}</div>
                <div className="text-[12px] text-[#7a706a] mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
            {testimonials.map((tt, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={cn(
                  "ph w-20 h-20 rounded-md shrink-0 transition-all",
                  i === idx ? "opacity-100 ring-2 ring-[#4F4742]" : "opacity-40 hover:opacity-70"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
