import { Suspense, lazy, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { upcomingEvent } from '../data/siteData'

const HandsLayer3D = lazy(() => import('./HandsLayer3D'))

function UpcomingEventSection() {
  const sectionRef = useRef(null)
  const eyeRef = useRef(null)
  const cardRef = useRef(null)
  const dotRef = useRef(null)
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)
  const numberTrackRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const card = cardRef.current
    const eye = eyeRef.current
    const dot = dotRef.current
    const topTrack = topTrackRef.current
    const bottomTrack = bottomTrackRef.current
    const numberTrack = numberTrackRef.current

    if (
      !section ||
      !card ||
      !eye ||
      !dot ||
      !topTrack ||
      !bottomTrack ||
      !numberTrack
    )
      return undefined

    const state = { tx: 0, ty: 0, cx: 0, cy: 0 }

    let rafId = 0

    const tick = () => {
      state.cx += (state.tx - state.cx) * 0.13
      state.cy += (state.ty - state.cy) * 0.13

      gsap.set(dot, {
        x: state.cx,
        y: state.cy,
      })

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)

    const onMove = (event) => {
      const r = eye.getBoundingClientRect()

      const dx = event.clientX - (r.left + r.width / 2)
      const dy = event.clientY - (r.top + r.height / 2)

      const maxX = r.width * 0.26
      const maxY = r.height * 0.28

      state.tx = gsap.utils.clamp(-maxX, maxX, dx * 0.25)
      state.ty = gsap.utils.clamp(-maxY, maxY, dy * 0.25)
    }

    const onLeave = () => {
      state.tx = 0
      state.ty = 0
    }

    const ctx = gsap.context(() => {
      gsap.to(dot, {
        scale: 1.08,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        ease: 'power3.inOut',
      })

      gsap.to('.event-badge-ring', {
        rotate: 360,
        duration: 13,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      })

      gsap.to(numberTrack, {
        xPercent: -50,
        duration: 55,
        ease: 'none',
        repeat: -1,
      })

      gsap.to(topTrack, {
        x: -300,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(bottomTrack, {
        x: 300,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    card.addEventListener('pointermove', onMove, {
      passive: true,
    })

    card.addEventListener('pointerleave', onLeave, {
      passive: true,
    })

    return () => {
      window.cancelAnimationFrame(rafId)

      card.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerleave', onLeave)

      ctx.revert()
    }
  }, [])

  return (
    <section
      id="upcoming"
      ref={sectionRef}
      className="reveal-root mt-20 overflow-x-hidden"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#050816] py-16 sm:py-24">
        
        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
        </div>

        {/* NUMBER TRACK */}

        <div className="pointer-events-none absolute top-6 w-full overflow-hidden">
          <div
            ref={numberTrackRef}
            className="flex w-max gap-16 whitespace-nowrap font-display text-6xl font-semibold text-white/5 md:text-8xl"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>
                2026 / 2030 / 2040 / AI / FUTURE / DESIGN
              </span>
            ))}
          </div>
        </div>

        {/* TOP TRACK */}

        <div className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden">
          <div
            ref={topTrackRef}
            className="flex w-max gap-16 whitespace-nowrap font-display text-7xl font-semibold text-white/10 md:text-8xl"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`top-${i}`}
                className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]"
              >
                NEXT EXPERIENCE
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM TRACK */}

        <div className="pointer-events-none absolute bottom-10 inset-x-0 overflow-hidden">
          <div
            ref={bottomTrackRef}
            className="flex w-max gap-16 whitespace-nowrap font-display text-7xl font-semibold text-white/5 md:text-8xl"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={`bottom-${i}`}>
                INNOVATION / DESIGN / TECHNOLOGY
              </span>
            ))}
          </div>
        </div>

        {/* HEADER */}

        <div className="relative z-10 px-4 sm:px-6">
          <p className="font-clean text-xs tracking-[0.28em] text-cyan-300">
            UPCOMING EVENT
          </p>

          <div className="mt-6 max-w-6xl">
            <h2 className="font-display text-5xl font-semibold leading-[0.9] text-white sm:text-7xl md:text-[120px]">
             AGENTATHON
            </h2>

            <h2 className="font-display text-5xl font-semibold leading-[0.9] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] sm:text-7xl md:text-[120px]">
              A 2 DAY EVENT
            </h2>
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="relative z-10 mt-14 grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_500px]">
          
          {/* LEFT CONTENT */}

          <div className="reveal">
            <div className="mb-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                ✦ Live Workshops
              </div>

              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
                ✦ AI Showcase
              </div>

              <div className="rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-2 text-sm text-pink-200 backdrop-blur-xl">
                ✦ Networking
              </div>
            </div>

            <h3 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {upcomingEvent.title}
            </h3>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Experience a next-generation tech event focused on design,
              artificial intelligence, innovation, immersive experiences, and
              future digital systems.
            </p>

            {/* EVENT INFO */}

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-cyan-300">
                  DATE
                </p>

                <h4 className="mt-3 text-lg font-semibold text-white">
                  {upcomingEvent.date}
                </h4>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-cyan-300">
                  TIME
                </p>

                <h4 className="mt-3 text-lg font-semibold text-white">
                  9:00AM-4.00PM
                </h4>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-cyan-300">
                  LOCATION
                </p>

                <h4 className="mt-3 text-lg font-semibold text-white">
                  Bangalore
                </h4>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://agentathonweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 font-clean text-sm font-medium text-black transition hover:scale-[1.03]"
              >
                Register Now ↗
              </a>

              <a
                href="https://agentathonweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/10"
              >
                Explore Details ↗
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}

          <div className="reveal relative">
            <div
              ref={cardRef}
              className="relative mx-auto aspect-[3/4] w-[min(500px,100%)] overflow-hidden rounded-[38px] border border-white/10 bg-[#0a1029] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <Suspense fallback={null}>
                <HandsLayer3D />
              </Suspense>

              {/* EYE */}

              <div
                ref={eyeRef}
                className="absolute left-1/2 top-1/2 h-48 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-b from-cyan-400/20 to-transparent"
                style={{
                  clipPath: 'ellipse(48% 36% at 50% 50%)',
                }}
              >
                <div className="absolute inset-2 rounded-[50%] bg-gradient-to-b from-black/80 to-black/40" />

                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">
                  <div ref={dotRef} className="h-14 w-14">
                    <div className="h-14 w-14 rounded-full bg-cyan-300 shadow-[0_0_90px_rgba(94,217,243,0.85)]" />
                  </div>
                </div>
              </div>

              {/* EVENT BADGE */}

              <button
                type="button"
                onClick={() =>
                  window.open(
                    'https://agentathonweb.vercel.app/',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="event-badge group absolute bottom-6 right-6 z-40 cursor-pointer transition-transform duration-300 hover:scale-105"
                aria-label="Open upcoming event"
              >
                <div className="event-badge-ring relative h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_18px_70px_rgba(94,217,243,0.35)]">
                  
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="badgeTextCircle"
                        d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                      />
                    </defs>

                    <text
                      fill="rgba(255,255,255,0.92)"
                      fontSize="8"
                      letterSpacing="1.2"
                    >
                      <textPath href="#badgeTextCircle">
                        OPEN EVENT • REGISTER NOW •
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-[16px] rounded-full bg-[#081120]" />

                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-lg text-white">↗</span>
                  </div>
                </div>
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-white/40">
              Move your cursor over the card
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEventSection