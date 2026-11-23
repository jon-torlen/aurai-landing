import { useState } from 'react'

// Respaldo del video original (CloudFront). Para revertir, usa esta URL en VIDEO_URL.
const ORIGINAL_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260618_174853_aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4'

// Video activo: Pexels #8005852, servido localmente desde public/aurai-hero.mp4.
const VIDEO_URL = import.meta.env.BASE_URL + 'aurai-hero.mp4'

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Connect', href: '#connect' },
]

const features = ['Smart Therapy', 'Real-time Healing', 'Insights into outcomes']

function Logo() {
  return (
    <img
      src={import.meta.env.BASE_URL + 'jt.jpg'}
      alt="Aura"
      className="h-5 w-5 rounded-full object-cover sm:h-7 sm:w-7"
    />
  )
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
      {children}
    </span>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(email)
  }

  return (
    <main className="relative h-screen w-full overflow-hidden font-inter">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[80%_center] md:object-right lg:object-center"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <header className="w-full p-4 sm:p-6 lg:p-8">
          <nav className="relative flex w-full items-center bg-black/20 backdrop-blur-md rounded-2xl border-white/10 border px-4 py-3 sm:px-6">
            <a
              href="https://jon-torlen.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <Logo />
              <span className="font-askan text-xl sm:text-2xl">Aura</span>
            </a>

            <div className="ml-4 sm:ml-32 md:ml-64 lg:ml-96 flex flex-1 items-center justify-end gap-4">
              <div className="hidden items-center gap-6 sm:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="hidden whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:block"
              >
                Join the list
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7 H20 M4 12 H20 M4 17 H20" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>

            {menuOpen && (
              <div className="absolute right-4 top-full z-20 mt-2 flex w-44 flex-col gap-1 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-md sm:hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  className="mt-1 rounded-xl bg-white/15 px-4 py-2 text-left text-sm font-medium text-white hover:bg-white/25"
                >
                  Join the list
                </button>
              </div>
            )}
          </nav>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 pb-10 text-center">
          <h1 className="font-askan text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Your calm is always within.
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/90 sm:text-lg">
            Aurai is your always-on wellness companion. Built by leading therapists, it brings you the care and clarity right when you need it.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Your email address"
              className="w-full flex-1 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm text-white placeholder-white/60 backdrop-blur-md outline-none focus:border-white/50"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Join the list
            </button>
          </form>
        </section>

        <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 px-6 pb-6">
          {features.map((feature) => (
            <Pill key={feature}>{feature}</Pill>
          ))}
        </div>

        <div className="hidden sm:flex flex-col items-end gap-2 self-end p-6 lg:p-8">
          {features.map((feature) => (
            <Pill key={feature}>{feature}</Pill>
          ))}
        </div>
      </div>
    </main>
  )
}
