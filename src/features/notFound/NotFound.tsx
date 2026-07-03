import SEO from "@/components/common/SEO";
import { LinkButton } from "@/components/ui/app-button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for doesn't exist." />
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="uppercase text-[13px] tracking-[0.2em] text-[#7a706a]">Error 404</div>
        <h1 className="mt-6 uppercase font-medium text-[#4F4742]" style={{ fontSize: "clamp(60px,10vw,140px)", lineHeight: 1 }}>
          Not Found
        </h1>
        <p className="mt-6 max-w-md text-[#4F4742]/80">
          The page you are looking for has moved, been renamed or no longer exists.
        </p>
        <div className="mt-10">
          <LinkButton to="/" variant="filled">Back to Home</LinkButton>
        </div>
      </section>
    </>
  );
}
