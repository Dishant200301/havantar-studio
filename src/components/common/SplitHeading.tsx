import { useEffect, useRef, type ReactNode } from "react";
import SplitType from "split-type";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  type?: "words" | "lines" | "chars";
  delay?: number;
};

export default function SplitHeading({
  as = "h2",
  children,
  className,
  type = "words",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const split = new SplitType(el, { types: type });
    const items = (type === "lines" ? split.lines : type === "chars" ? split.chars : split.words) || [];
    items.forEach((n) => {
      const node = n as HTMLElement;
      node.style.display = "inline-block";
      node.style.transform = "translateY(110%)";
      node.style.opacity = "0";
      node.style.transition = "transform .9s cubic-bezier(.7,0,.15,1), opacity .9s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((n, i) => {
              const node = n as HTMLElement;
              setTimeout(() => {
                node.style.transform = "translateY(0)";
                node.style.opacity = "1";
              }, delay + i * 35);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      split.revert();
    };
  }, [type, delay, children]);

  const Comp = as as any;
  return (
    <Comp ref={ref as any} className={className} style={{ overflow: "hidden" }}>
      {children}
    </Comp>
  );
}
