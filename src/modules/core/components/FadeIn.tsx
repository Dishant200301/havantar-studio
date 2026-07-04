import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & MotionProps;

export default function FadeIn({ children, className, delay = 0, y = 24, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.7, 0, 0.15, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
