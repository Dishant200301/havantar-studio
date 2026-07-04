import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import SEO from "@/modules/core/components/SEO";
import FadeIn from "@/modules/core/components/FadeIn";
import { Button } from "@/modules/core/components/ui/app-button";

const schema = z.object({
  fullname: z.string().min(2, "Fullname is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(6, "Phone Number is required"),
  services: z.string().min(2, "Services is required"),
  projectType: z.string().min(2, "Project Type is required"),
  location: z.string().min(2, "Your Location is required"),
  projectScale: z.string().min(1, "Project Scale is required"),
});
type FormValues = z.infer<typeof schema>;

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.62 11.17-.1-.95-.2-2.41.04-3.45.22-.93 1.4-5.97 1.4-5.97s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.04.4 2.14.9 2.74.1.13.1.25.07.38l-.33 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.46-6.23 7.46-1.22 0-2.35-.63-2.75-1.38l-.75 2.85c-.27 1.05-1 2.35-1.49 3.15C9.57 23.81 10.76 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}

function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.2 5c2.4 0 4.3 1.1 4.3 3.4 0 1.6-1 2.6-2.3 3 1.5.4 2.7 1.5 2.7 3.5 0 2.5-2 3.8-4.7 3.8H1v-13.7h7.2zm-.9 5.3c1 0 1.7-.4 1.7-1.3s-.7-1.2-1.7-1.2H3.7v2.5h3.6zm.4 5.9c1.1 0 2-.4 2-1.4 0-1-.9-1.4-2-1.4H3.7v2.8h4zm11.3-4.5c1.9 0 3.2 1.3 3.3 3.3H16c0 1.3.8 2.1 2 2.1 1 0 1.6-.4 1.8-.9h2.9c-.4 2.1-2.1 3.5-4.7 3.5-3.3 0-5.1-2.3-5.1-5.3 0-3.1 1.9-5.3 4.9-5.3zm.1 2.4c-1 0-1.6.7-1.7 1.4H20c-.1-.7-.6-1.4-1.6-1.4zM16.5 8h4.8v1.1h-4.8V8z" />
    </svg>
  );
}

function Field({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="h-[51px] flex items-end pb-[10px] border-b border-[#4F4742]">
        {children}
      </div>
      {error && <div className="mt-1 text-[12px] text-red-600">{error}</div>}
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-[#4F4742]">
      <div>
        <div className="text-[15px] leading-[24px] font-medium text-[#4F4742]">Phone Number</div>
        <div className="mt-0">
          <a
            href="tel:+9718123456789"
            className="underline-lr text-[11px] leading-[18px] font-medium tracking-normal text-[#4F4742] inline-block"
          >
            +971 812 3456 789
          </a>
        </div>
      </div>
      <div>
        <div className="text-[15.1px] leading-[24px] font-medium text-[#4F4742]">Email</div>
        <div className="mt-0">
          <a
            href="mailto:hello@havantar.studio"
            className="underline-lr text-[11px] leading-[18px] font-medium tracking-normal text-[#4F4742] inline-block"
          >
            hello@havantar.studio
          </a>
        </div>
      </div>
      <div>
        <div className="text-[14.9px] leading-[24px] font-medium text-[#4F4742]">Social Media</div>
        <div className="mt-2 flex items-center gap-[17px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4F4742] hover:opacity-80 transition-opacity"
            title="Instagram"
          >
            <InstagramIcon className="w-[23px] h-[23px]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4F4742] hover:opacity-80 transition-opacity"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-[23px] h-[23px]" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4F4742] hover:opacity-80 transition-opacity"
            title="Pinterest"
          >
            <PinterestIcon className="w-[23px] h-[23px]" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4F4742] hover:opacity-80 transition-opacity"
            title="Behance"
          >
            <BehanceIcon className="w-[28px] h-[28px]" />
          </a>
        </div>
      </div>
      <div>
        <div className="text-[14.8px] leading-[24px] font-medium text-[#4F4742]">Address</div>
        <div className="mt-2 text-[11.1px] leading-[16px] font-medium text-[#4F4742] capitalize max-w-[266px] block">
          Dubai-Based Architecture And Interior Design Studio
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Thanks — we'll be in touch shortly.");
    reset();
  };

  return (
    <>
      <SEO title="Contact" description="Let's talk about your project. Get in touch with HavAntar Studio." />
      <section className="px-4 lg:px-6 xl:px-8 py-12 lg:py-24 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
          {/* Left Column */}
          <FadeIn>
            <div className="w-full lg:max-w-[573px] flex flex-col justify-between h-full min-h-auto lg:min-h-[580px] py-2">
              <div>
                <h1
                  className="uppercase font-medium text-[#4F4742] text-[24px] md:text-[32px] lg:text-[40px] leading-[31px] md:leading-[42px] lg:leading-[52px] tracking-[-0.4px]"
                >
                  LET'S TALK ABOUT YOUR PROJECTS
                </h1>
                <p className="mt-6 text-[#4F4742] text-[14.9px] leading-[24px] font-medium max-w-md">
                  Every collaboration begins with a conversation. We'd love to hear about your project, idea, or
                  partnership.
                </p>
              </div>

              {/* Contact Info (Visible on Desktop here) */}
              <div className="hidden lg:block mt-12">
                <ContactInfo />
              </div>
            </div>
          </FadeIn>

          {/* Right Column / Form */}
          <FadeIn delay={0.1}>
            <div className="w-full lg:max-w-[782px] flex-1">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
                <div>
                  <h2 className="text-[18.4px] leading-[24px] font-medium tracking-[-0.4px] text-[#4F4742] mb-[24px]">
                    Enter Your Details
                  </h2>
                  <div className="space-y-[12px]">
                    <Field error={errors.fullname?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.7px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Fullname"
                        required
                        {...register("fullname")}
                      />
                    </Field>
                    <Field error={errors.email?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.7px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        type="email"
                        placeholder="Email"
                        required
                        {...register("email")}
                      />
                    </Field>
                    <Field error={errors.phone?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.7px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Phone Number"
                        required
                        {...register("phone")}
                      />
                    </Field>
                    <Field error={errors.services?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.5px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Services"
                        required
                        {...register("services")}
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-[48px]">
                  <h2 className="text-[18.4px] leading-[24px] font-medium tracking-[-0.4px] text-[#4F4742] mb-[24px]">
                    Project Context
                  </h2>
                  <div className="space-y-[12px]">
                    <Field error={errors.projectType?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.3px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Project Type"
                        required
                        {...register("projectType")}
                      />
                    </Field>
                    <Field error={errors.location?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.5px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Your Location"
                        required
                        {...register("location")}
                      />
                    </Field>
                    <Field error={errors.projectScale?.message}>
                      <input
                        className="w-full bg-transparent border-none h-[27px] outline-none text-[#4F4742] placeholder-[#6B6B6B] text-[16.5px] leading-[20px] tracking-[-0.3px] font-normal focus:ring-0 focus:outline-none"
                        placeholder="Project Scale"
                        required
                        {...register("projectScale")}
                      />
                    </Field>
                  </div>
                </div>

                <Button
                  variant="filled"
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full h-[40px] bg-[#4F4742] hover:bg-[#3f3835] rounded-full text-[13.3px] leading-[17px] font-semibold text-[#FFFFFF] normal-case mt-[36px]"
                >
                  {loading ? "Sending…" : "Submit"}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Contact Info (Visible on Tablet/Mobile here below the form) */}
        <div className="block lg:hidden mt-16 border-t border-[#4F4742]/10 pt-10">
          <ContactInfo />
        </div>
      </section>
    </>
  );
}

