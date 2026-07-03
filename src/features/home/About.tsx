import FadeIn from "@/components/common/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
      {/* Desktop View (xl and above) - 3-Column Horizontal layout */}
      <div className="hidden xl:flex flex-row items-center justify-between h-[493px]">
        {/* Left Image (Sofa/Coffee Table top-down) */}
        <FadeIn className="w-[28%] h-full">
          <div className="w-full h-full overflow-hidden group">
            <img
              src="/images/home/about/about_image-1.webp"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Timeless Spaces Sofa View"
            />
          </div>
        </FadeIn>

        {/* Center Text Column (Centered) */}
        <FadeIn delay={0.1} className="w-[500px] flex flex-col justify-center items-center text-center px-4">
          <h2 className="uppercase font-medium text-[#4F4742] text-[40px] leading-[52px] tracking-[-0.4px]">
            DESIGNING TIMELESS SPACES WITH PURPOSE
          </h2>
          <p className="mt-[24px] uppercase text-[16px] leading-[21px] tracking-[-0.3px] font-normal text-[#4F4742]">
            WE OFFER A COMPLETE RANGE OF ARCHITECTURE AND INTERIOR DESIGN SERVICES TAILORED TO CREATE SPACES.
          </p>
        </FadeIn>

        {/* Right Image (Floor Lamp & Table) */}
        <FadeIn delay={0.2} className="w-[28%] h-full">
          <div className="w-full h-full overflow-hidden group">
            <img
              src="/images/home/about/about_image-2.webp"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Timeless Spaces Table View"
            />
          </div>
        </FadeIn>
      </div>

      {/* Laptop View (lg to xl) - 2-Column layout, text left, image right */}
      <div className="hidden lg:flex xl:hidden flex-row items-center justify-between gap-12 h-[450px]">
        {/* Left Column (Left-aligned Text) */}
        <FadeIn className="w-[45%] flex flex-col justify-center text-left">
          <h2 className="uppercase font-medium text-[#4F4742] text-[36px] leading-[46px] tracking-[-0.4px]">
            DESIGNING TIMELESS SPACES WITH PURPOSE
          </h2>
          <p className="mt-5 uppercase text-[15px] leading-[20px] tracking-[-0.3px] font-normal text-[#4F4742]">
            WE OFFER A COMPLETE RANGE OF ARCHITECTURE AND INTERIOR DESIGN SERVICES TAILORED TO CREATE SPACES.
          </p>
        </FadeIn>

        {/* Right Column (Table Image) */}
        <FadeIn delay={0.1} className="w-[50%] h-full">
          <div className="w-full h-full overflow-hidden group">
            <img
              src="/images/home/about/about_image-2.webp"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Timeless Spaces Table View Laptop"
            />
          </div>
        </FadeIn>
      </div>

      {/* Mobile/Tablet View (Stacked Vertically) */}
      <div className="flex lg:hidden flex-col items-center gap-10">
        <FadeIn className="text-center ">
          <h2 className="uppercase font-medium text-[#4F4742] text-[24px] leading-[36px] tracking-[-0.4px]">
            DESIGNING TIMELESS SPACES WITH PURPOSE
          </h2>
          <p className="mt-[10px] uppercase text-[12px] leading-[14px] tracking-[-0.3px] font-normal text-[#4F4742]">
            WE OFFER A COMPLETE RANGE OF ARCHITECTURE AND INTERIOR DESIGN SERVICES TAILORED TO CREATE SPACES.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="w-full">
          <div className="w-full h-[350px] overflow-hidden group">
            <img
              src="/images/home/about/about_image-2.webp"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Timeless Spaces Table View Mobile"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
