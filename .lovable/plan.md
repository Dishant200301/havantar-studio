
# HavAntar Studio — Build Plan

Rip out the current TanStack Start bootstrap and rebuild as a plain Vite + React + TypeScript + Tailwind + React Router SPA, then deliver all 8 pages, the reusable Button component, and every Home section with animations, in one pass.

## 1. Stack migration

- Remove TanStack Start: delete `src/routes/`, `src/routeTree.gen.ts`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routes/README.md`.
- Uninstall: `@tanstack/react-router`, `@tanstack/react-router-devtools`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@lovable.dev/vite-tanstack-config`.
- Install: `react-router-dom`, `react-helmet-async`, `gsap`, `@studio-freight/lenis`, `split-type`, `framer-motion`, `embla-carousel-react` (already there), `lucide-react` (already there).
- Rewrite `vite.config.ts` to a minimal Vite React config (React plugin + Tailwind v4 Vite plugin + `@` alias).
- Create `index.html` at project root (Vite entry) and `src/main.tsx` mounting `<BrowserRouter><HelmetProvider><App/></HelmetProvider></BrowserRouter>`.
- Keep `src/styles.css` (Tailwind v4 + tokens), rename palette tokens to HavAntar: `--bg: #F0EBE6`, `--bg-alt: #F6F2EC`, `--ink: #4F4742`, `--ink-deep: #504843`, `--beige-footer: #E2DACF`. Load Inter + Inter Display via `<link>` in `index.html`.

## 2. Routing (React Router v6)

`src/App.tsx` renders `<Routes>` with `<Navbar/>` + `<Outlet/>` + `<Footer/>` layout:

```
/                       → Home
/projects               → Projects
/projects/:slug         → Project Details
/contact                → Contact
/privacy-policy         → Privacy Policy
/cookie-policy          → Cookie Policy
/terms-and-conditions   → Terms & Conditions
*                       → NotFound (404)
```

Every page uses `<Helmet>` with title format `HavAntar Studio | <Page>` (pipe separator, no dashes) and a matching description + OG tags.

Nav "About" / "Services" scroll to `#about` / `#services` on Home — implemented by navigating to `/#about` and a `useHashScroll` hook that smooth-scrolls on route change.

## 3. Folder layout (feature-based modular)

```
src/
  main.tsx
  App.tsx
  styles.css
  lib/utils.ts
  hooks/                 useLenis, useHashScroll, useIsMobile, useInView
  components/
    ui/Button.tsx        (reusable, 3 variants)
    layout/Navbar.tsx
    layout/Footer.tsx
    layout/PageTransition.tsx
    common/SplitHeading.tsx  (splittype-based reveal)
    common/Marquee.tsx
  features/
    home/
      Hero.tsx
      About.tsx
      MarqueeStrip.tsx
      FeaturedProjects.tsx
      Services.tsx        (+ ServiceModal.tsx)
      ProjectExpertise.tsx
      Process.tsx
      Testimonials.tsx
      Works.tsx           (3D parallax grid)
      CTA.tsx
      index.tsx           (Home page composition)
    projects/
      ProjectsPage.tsx
      ProjectCard.tsx
      projectsData.ts     (invented sample content, 6+ projects)
    projectDetails/
      ProjectDetailsPage.tsx
    contact/
      ContactPage.tsx
      ContactForm.tsx     (react-hook-form + zod, all required)
    legal/
      PrivacyPolicy.tsx
      CookiePolicy.tsx
      TermsConditions.tsx
    notFound/NotFound.tsx

public/images/
  hero/  about/  projects/  services/  process/  testimonials/  works/  cta/  footer/
  (empty for now — sections render placeholder <div> blocks with the correct aspect ratio, ready for drop-in files)
```

## 4. Reusable Button component

`<Button variant="filled" | "light" | "glass">` with the exact tokens you specified. All variants: `rounded-full`, `text-[13px] leading-[16px] uppercase font-normal font-inter`, "text moves up on hover" — implemented by stacking two label spans in a `overflow-hidden` wrapper; on hover the top span translates `-100%` and the duplicate below slides in from `100%`.

- `filled`: `bg-[#504843] text-[#F0EBE6]`
- `light`:  `bg-[#F0EBE6] text-[#4F4742]`
- `glass`:  `bg-white/10 backdrop-blur text-[#F0EBE6] border border-white/20`

Also supports `as="a"` / `to` for router links, `icon` slot, disabled/loading state (used by contact submit).

## 5. Navbar

- Sticky, `bg-[#F0EBE6]`, z-50.
- Desktop: left links `About | Projects | Services` (Inter 500, 13/15px, uppercase, color `#4F4742`), each with the text-up hover animation. About/Services are hash links to Home sections; Projects routes to `/projects`.
- Center: `HavAntar Studio` (Inter 400, 22/26px, `#4F4742`) linking to `/`.
- Right: filled Button "Contact Us" → `/contact`.
- Mobile/tablet (`< lg`): left brand, right hamburger (two smooth horizontal lines that morph). Tapping opens a fixed dropdown menu panel below the navbar with smooth slide + fade; close button animates the lines back. Body scroll locked while open.

## 6. Home sections (all with fade-up on enter, `SplitHeading` for main headings)

1. **Hero** — 90vh image with 6px margin all sides, 20px radius. Overlaid bottom-left headline (Inter Display 80/88, `#F0EBE6`) + right-side paragraph (16/21). Two buttons below (variants 2 + 3). Under the hero, a horizontal divider `border-[#F0EBE6]`. **Laptop-only zoom scroll**: image starts scaled ~1.15 and content sits inside; as user scrolls, image scales down toward 1 and its inner content slides up; on further scroll the image shrinks further with left/right sibling images fading in with a gap. Reverse cleanly on scroll up. Implemented with GSAP ScrollTrigger, only mounted at `lg` breakpoint; mobile/tablet get a static hero.
2. **About** (`#about`) — 3-col on desktop (image / center heading + copy / image), single-col on tablet, stacked on mobile. `clamp()` typography. Fade-up + slight scale, staggered. Images zoom 1.05 on hover.
3. **Marquee strip** — infinite right-to-left loop with the 4 stat phrases (Inter 400 23/31 uppercase `#4F4742`), no dot separators, gap-based repetition, CSS keyframes with duplicated track for seamless loop.
4. **Featured Projects** (`#projects-featured`) — 3 cards on desktop, center card taller; each card links to `/projects/:slug`, image zooms 1.05 on hover, title underline grows L→R on hover and reverses on leave, circular arrow button with dual-arrow diagonal swap animation. Tablet/mobile stack. Bottom centered "VIEW MORE PROJECTS" text link with same underline animation → `/projects`.
5. **Services** (`#services`) — 6 rows with dividers, title/desc left, circular dual-arrow right. Row hover reveals a preview image sliding in from the left with fade+scale; text shifts right. Click opens a centered modal (portal) with blurred dark overlay, cover image with gradient, close X, title, hours, location, description, feature checklist, price, and two buttons (`filled` "DESIGN YOUR SPACE" → `/contact`, `light` "Close"). Escape + click-outside close, body scroll lock, framer-motion fade+scale. Same layout adapts for tablet (arrow above title) and mobile.
6. **Project Expertise** — 2 large cards side-by-side. Default: bottom-left title/desc. Hover: bottom content slides down out, top-center reveals big number (e.g. `35+`), uppercase heading, glass button "View Project ↗". Image zooms, gradient darkens. Custom circular cursor scoped to this section only (hidden default cursor). Click → `/projects/:slug`. Tap-active state on mobile.
7. **Process** — 4 equal cards in a row. Default: icon top-right in soft square, title/desc bottom-left, step number bottom-left edge. Hover any card triggers **all four** simultaneously: bottom text slides down out, step number moves up, icon animates to center, heading appears below icon, and a second image slides bottom→top replacing the first while the first subtly scales. Gradient overlay preserved. Tap-active on mobile.
8. **Testimonials** — 2-col desktop (large rounded image left, stars + quote + name + designation + 4 thumbnails right). Image reveals bottom→top on enter; content staggers fade-up. Clicking a thumbnail crossfades image and content; inactive thumbnails at reduced opacity. Mobile: image → content → horizontally scrollable thumbnails.
9. **Works** — 3D multi-layered parallax grid with a huge serif "WORKS" background text. Uses Lenis smooth scroll globally + GSAP with `perspective` and per-card `translate3d` speeds so cards drift diagonally up-left as the user scrolls down. `will-change: transform`, subtle hover lift.
10. **CTA** — full-width rounded banner image, dark L→R gradient, quote top-left with author beneath, two buttons bottom-right (`filled` "Book Consultation", `glass` "View Projects"). Image reveals bottom→top, content staggers in. Mobile: centered stacked.

## 7. Other pages

- **Projects** — hero heading, filter pills (All / Residential / Commercial), responsive grid using the same ProjectCard, sample content (Harmony Living Space, Executive Office, Modern Co-working, Luxury Villa, Retail Experience Center, Serenity Villa, etc.).
- **Project Details** (`/projects/:slug`) — banner image with title + meta strip (category / location / year), description block, gallery, project details grid (Owner, Budget, Services, Surface, Address), "Other Projects" strip. Slug lookup in `projectsData.ts`; unknown slug redirects to 404.
- **Contact** — 2-col desktop (heading + intro + contact info + socials on left, form on right). Underline-style inputs with focus expand; groups "Enter Your Details" and "Project Context". All fields required via `react-hook-form` + `zod` (fullname, email, phone, services, projectType, location, projectScale, message). Submit uses reusable Button 2 with loading/disabled states, shows toast (sonner). Phone/email as `tel:`/`mailto:` links with L→R underline hover. Social icons open in new tab.
- **Privacy Policy / Cookie Policy / Terms & Conditions** — long-form typographic pages with the same Helmet pattern and shared `<LegalLayout>` wrapper (heading + last-updated + sectioned content).
- **404** — centered brand-consistent message with "Back to Home" filled button.

## 8. Footer

Beige `#E2DACF`, 12px margin on all sides (floating card), 12px radius. Top: huge uppercase headline left ("OPEN TO NEW PROJECTS…") + "GET IN TOUCH" text link with L→R underline on hover, right side 3 nav columns (Pages / Social / Legal) — each link uses vertical text-slide hover (current slides up + fades out, duplicate rises from below). Divider. Contact row (Location, Email, Phone) with minimalist icons; hover slides icon right and reveals text with typewriter effect. Copyright right-aligned, reduced opacity. Massive scrolling "HavAntar Studio" marquee (right-to-left, seamless). Full-width bottom architectural image with rounded bottom corners. Fully responsive collapse for tablet/mobile.

## 9. Global animation setup

- Lenis smooth scroll mounted in `App.tsx`, hooked to GSAP ticker.
- `SplitHeading` component wraps main headings and main paragraphs with `split-type` per-character (headings) / per-line (paragraphs) reveal on scroll into view.
- Every section uses a shared `<FadeIn>` wrapper (framer-motion) for consistent fade-up.
- Respect `prefers-reduced-motion` where feasible.

## Technical notes

- Tailwind v4 stays; add semantic tokens in `styles.css` under `@theme inline` for `bg`, `bg-alt`, `ink`, `ink-deep`, `beige-footer`, plus `font-inter`, `font-display`.
- Images: every `<img>` uses a `public/images/<page>/<name>.jpg` path; until you drop files in, sections render a same-sized placeholder `<div className="bg-[#e6dfd6]" />` with the exact aspect so layout is final.
- `react-helmet-async` for per-page `<Helmet>` — titles use pipe: `HavAntar Studio | Projects`.
- `bun add react-router-dom react-helmet-async gsap @studio-freight/lenis split-type framer-motion` and `bun remove` the TanStack packages.
- Delete `AGENTS.md`-referenced TanStack conventions from the workspace only implicitly by replacing the code; do not modify `.git`.

## Deliverable in one build turn

1. Migrate bootstrap (remove TanStack, add Vite/React Router shell, index.html, main.tsx, App.tsx).
2. Tokens + fonts + Button + Navbar + Footer + Lenis + SplitHeading.
3. Home with all 10 sections.
4. Projects, Project Details, Contact, Privacy, Cookie, Terms, 404.
5. Verify build passes and preview renders.
