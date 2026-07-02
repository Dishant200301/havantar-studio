import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Instagram, Linkedin } from "lucide-react";
import SEO from "@/components/common/SEO";
import FadeIn from "@/components/common/FadeIn";
import { Button } from "@/components/ui/app-button";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullname: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Required"),
  services: z.string().min(2, "Required"),
  projectType: z.string().min(2, "Required"),
  location: z.string().min(2, "Required"),
  projectScale: z.string().min(1, "Required"),
  message: z.string().min(10, "Please describe your project (min 10 chars)"),
});
type FormValues = z.infer<typeof schema>;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pt-5">
      <label className="absolute top-0 left-0 text-[11px] uppercase tracking-[0.1em] text-[#7a706a]">
        {label}
      </label>
      {children}
      {error && <div className="mt-1 text-[12px] text-red-600">{error}</div>}
    </div>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-[#4F4742]/25 py-3 text-[#4F4742] focus:outline-none focus:border-[#4F4742] transition-colors";

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
      <section className="px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-14">
        <FadeIn>
          <h1 className="uppercase font-medium text-[#4F4742]" style={{ fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.05 }}>
            Let's talk about your projects
          </h1>
          <p className="mt-6 text-[#4F4742]/80 max-w-md">
            Every collaboration begins with a conversation. We'd love to hear about your project, idea, or partnership.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 gap-8 text-[#4F4742]">
            <div>
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-70">Phone Number</div>
              <a href="tel:+9718123456789" className="underline-lr mt-2 inline-block">+971 812 3456 789</a>
            </div>
            <div>
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-70">Email</div>
              <a href="mailto:hello@havantar.studio" className="underline-lr mt-2 inline-block">hello@havantar.studio</a>
            </div>
            <div>
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-70">Address</div>
              <div className="mt-2">Dubai-based architecture and interior design studio</div>
            </div>
            <div>
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-70">Social</div>
              <div className="mt-2 flex gap-3">
                {[
                  { icon: Instagram, href: "https://instagram.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#4F4742] text-[#F0EBE6] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h2 className="uppercase text-[13px] tracking-[0.12em] text-[#4F4742] mb-4">Enter your details</h2>
              <div className="space-y-6">
                <Field label="Full name" error={errors.fullname?.message}>
                  <input className={inputCls} {...register("fullname")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input className={inputCls} type="email" {...register("email")} />
                </Field>
                <Field label="Phone Number" error={errors.phone?.message}>
                  <input className={inputCls} {...register("phone")} />
                </Field>
                <Field label="Services" error={errors.services?.message}>
                  <input className={inputCls} {...register("services")} />
                </Field>
              </div>
            </div>
            <div>
              <h2 className="uppercase text-[13px] tracking-[0.12em] text-[#4F4742] mb-4">Project context</h2>
              <div className="space-y-6">
                <Field label="Project Type" error={errors.projectType?.message}>
                  <input className={inputCls} {...register("projectType")} />
                </Field>
                <Field label="Your Location" error={errors.location?.message}>
                  <input className={inputCls} {...register("location")} />
                </Field>
                <Field label="Project Scale" error={errors.projectScale?.message}>
                  <input className={inputCls} {...register("projectScale")} />
                </Field>
                <Field label="Message" error={errors.message?.message}>
                  <textarea rows={4} className={cn(inputCls, "resize-none")} {...register("message")} />
                </Field>
              </div>
            </div>
            <Button variant="light" type="submit" disabled={loading} className="w-full">
              {loading ? "Sending…" : "Submit"}
            </Button>
          </form>
        </FadeIn>
      </section>
    </>
  );
}
