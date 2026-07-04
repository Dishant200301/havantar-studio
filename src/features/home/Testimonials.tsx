import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "A Game-Changing Experience for My Growth",
    body: "Working with HavAntar brought clarity to decisions I had been postponing for months. The structure, insight, and accountability helped me move forward with confidence and measurable progress.",
    name: "Michael Turner",
    role: "Founder & Business Consultant",
    image: "/images/home/testimonial/testimonila_image-1.webp",
    avatar: "/images/home/testimonial/avatar-1.webp",
  },
  {
    quote: "Precision and craft in every single detail",
    body: "Working with the studio felt genuinely collaborative — they shaped an office our team actually loves being in. The details and design execution were absolutely flawless.",
    name: "Sarah Nuaimi",
    role: "Private Client",
    image: "/images/home/testimonial/testimonila_image-2.webp",
    avatar: "/images/home/testimonial/avatar-2.webp",
  },
  {
    quote: "Quiet, considered, and timeless design",
    body: "HavAntar delivered a home that feels perfectly balanced — every material, proportion, and detail was considered. The layout flow has transformed how we experience our daily lives.",
    name: "Sara Nuaimi",
    role: "Private Client",
    image: "/images/home/testimonial/testimonila_image-3.webp",
    avatar: "/images/home/testimonial/avatar-3.webp",
  },
  {
    quote: "A studio you can trust from concept to handover",
    body: "From first sketch to walkthrough, HavAntar delivered on time, on budget, and far beyond our expectations. Their level of professionalism and client care is truly unmatched.",
    name: "Karim Fares",
    role: "Managing Director, Vera Retail",
    image: "/images/home/testimonial/testimonila_image-4.webp",
    avatar: "/images/home/testimonial/avatar-4.webp",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="py-10 lg:py-20 px-4 sm:px-4 lg:px-6 xl:px-8 mx-auto max-w-[1600px]">
      <div className="text-center max-w-3xl mx-auto mb-14 px-6">
        <SplitHeading as="h2" className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]" type="words">
          What our clients say
        </SplitHeading>
        <FadeIn delay={0.2} className="uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
          Real experiences from clients who trusted us with their spaces
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Active Testimonial Portrait Image (Slides bottom-to-top on change) */}
        <div className="relative overflow-hidden w-full h-[320px] sm:h-[480px] lg:h-[520px] xl:h-[587px] rounded-[10px] bg-[#EBE5DE]/30">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full absolute inset-0 rounded-[10px] overflow-hidden"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Quote & Info Column (Fades & slides up on change) */}
        <div className="flex flex-col justify-between lg:h-[520px] xl:h-[587px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col justify-between"
            >
              {/* Top Block: Stars, Quote, Body */}
              <div className="flex flex-col">
                {/* Rating stars */}
                <div className="flex gap-1 text-[#4F4742]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] fill-[#4F4742] text-[#4F4742]" />
                  ))}
                </div>

                {/* Quote Heading */}
                <h3 className="mt-5 font-inter font-medium text-[22px] leading-[30px] sm:text-[26px] sm:leading-[36px] lg:text-[32px] lg:leading-[42px] text-[#4F4742] max-w-2xl">
                  {t.quote}
                </h3>

                {/* Body Text */}
                <p className="mt-5 font-inter font-normal text-[14px] leading-[21px] sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px] text-[#4F4742]/70 max-w-xl">
                  {t.body}
                </p>
              </div>

              {/* Bottom Block: Client Profile Info */}
              <div className="mt-8 lg:mt-0 flex flex-col gap-1">
                <span className="font-inter font-medium text-[14.9px] leading-[24px] text-[#4F4742]">
                  {t.name}
                </span>
                <span className="font-inter font-normal text-[13px] leading-[20px] text-[#4F4742]">
                  {t.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Avatars List Indicator */}
          <div className="mt-8 lg:mt-4 flex flex-wrap gap-2 sm:gap-2">
            {testimonials.map((tt, idx) => (
              <motion.button
                key={idx}
                onClick={() => setI(idx)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative w-14 h-14 sm:w-[74px] sm:h-[74px] rounded-[6px] overflow-hidden transition-all duration-300 cursor-pointer",
                  i === idx ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                <img
                  src={tt.avatar}
                  alt={tt.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
