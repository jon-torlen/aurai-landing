# QA.md — Strict Quality & Fidelity Gate (Aurai)

## Enforcement Rule
If ANY item below is missing, altered, truncated, or not 100% identical to the specification, **STOP** and immediately fix, rewrite, or recreate the affected files from scratch. Do not mark the task complete until every single check below passes.

## Verification Checklist
- [ ] **Viewport & Reset:** Single viewport (`100vh`, `overflow: hidden`), `* { margin: 0; padding: 0; box-sizing: border-box; }`, `body` uses `'Inter', sans-serif` and font smoothing rules.
- [ ] **Title & Fonts:** `<title>Aurai - Always-On Wellness Companion</title>`, Askan Light URL and Inter (300, 400, 500, 600) loaded, Tailwind `askan` and `inter` font families configured.
- [ ] **Self-hosted font & favicon:** Local `@font-face` for `'Askan Light'` using `./assets/askan-light.woff2` (so it renders on GitHub Pages despite the external CDN's CORP block), and favicon `./jt.jpg`.
- [ ] **Video & Focal Points:** Exact video URL (`import.meta.env.BASE_URL + 'aurai-hero.mp4'` — Pexels #8005852, served locally from `public/`), `autoPlay`, `loop`, `muted`, `playsInline`, `object-cover`, no dark overlay, and exact focal points (`80% center` default, `right center` on `md`, `center center` on `lg`).
- [ ] **Top Nav & Mobile Menu:** Glass pill (`bg-black/20 backdrop-blur-md rounded-2xl border-white/10`), `"Aura"` linking to `https://jon-torlen.github.io/`, menu spacing (`ml-4 sm:ml-32 md:ml-64 lg:ml-96`), desktop `"Join the list"` button (`hidden sm:block`), and mobile menu (`Story`, `Benefits`, `Connect`, `"Join the list"`).
- [ ] **Brand Logo:** Local image (`import.meta.env.BASE_URL + 'jt.jpg'`, served from `public/`), classes `h-5 w-5 rounded-full object-cover sm:h-7 sm:w-7`, shown next to the text `"Aura"`.
- [ ] **Hero Copy & Form:** Exact `<h1>` `"Your calm is always within."`, exact `<p>` `"Aurai is your always-on wellness companion. Built by leading therapists, it brings you the care and clarity right when you need it."`, placeholder `"Your email address"`, button `"Join the list"`, and `alert` with submitted email.
- [ ] **Feature Pills & Responsive Layout:** Exact pills `"Smart Therapy"`, `"Real-time Healing"`, `"Insights into outcomes"` on mobile (`flex sm:hidden`) and desktop right column (`hidden sm:flex flex-col items-end gap-2 self-end`), with zero placeholders or broken syntax.

## Rollback (video + branding changes)
`src/App.jsx.bak` and `QA.md.bak` are the original pre-change files. Restoring both returns the page to its initial state (CloudFront video, SVG logo, `"Aurai"` branding).
- Revert only the video: set `VIDEO_URL = ORIGINAL_VIDEO_URL` in `src/App.jsx` and delete `public/aurai-hero.mp4`.
- Revert only the branding: restore the SVG logo and `"Aurai"` brand text from `src/App.jsx.bak`.