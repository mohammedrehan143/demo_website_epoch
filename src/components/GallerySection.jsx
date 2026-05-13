import { motion } from 'framer-motion'
import { gallery } from '../data/siteData'

function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative mt-32 overflow-hidden px-4 py-24 md:px-10"
    >
      {/* More Visible Bluish Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dceeff] via-[#edf6ff] to-[#fff3f8]" />

      {/* Optimized Glow Effects */}
      <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-pink-200/30 blur-[90px]" />

      <div className="absolute right-[-100px] top-[40%] h-[320px] w-[320px] rounded-full bg-sky-300/35 blur-[100px]" />

      <div className="absolute bottom-0 left-[35%] h-[240px] w-[240px] rounded-full bg-blue-200/30 blur-[80px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-clean text-xs tracking-[0.35em] text-pink-400"
        >
          GALLERY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 font-display text-5xl font-semibold leading-tight text-[#1d2d44] md:text-7xl"
        >
          Immersive <span className="text-sky-400">Event</span> Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl font-clean text-sm leading-7 text-[#526172] md:text-base"
        >
          Every event tells a story — innovation, collaboration, creativity,
          and unforgettable moments built together by our community.
        </motion.p>
      </div>

      {/* Events */}
      <div className="relative z-10 mt-28 space-y-36">
        {(gallery || []).map((event, index) => (
          <div
            key={event?.id || index}
            className={`grid items-center gap-14 md:grid-cols-2 ${
              index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <p className="font-clean text-xs tracking-[0.3em] text-sky-400">
                EVENT EXPERIENCE
              </p>

              <h3 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#1d2d44] md:text-6xl">
                {event?.title || 'Untitled Event'}
              </h3>

              <p className="mt-8 max-w-xl font-clean text-sm leading-7 text-[#526172] md:text-base">
                {event?.description || 'No description available'}
              </p>

              {/* Floating Images */}
              <div className="group relative mt-14 hidden h-[320px] w-full md:block">
                {(event?.images || []).slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className={`absolute overflow-hidden rounded-[26px]
                    border border-white/50
                    bg-white/25
                    ring-1 ring-white/20
                    shadow-[0_10px_28px_rgba(96,165,250,0.14)]
                    backdrop-blur-[2px]
                    transition-transform duration-200 ease-out will-change-transform
                    hover:-translate-y-1 hover:scale-[1.02] ${
                      i === 0
                        ? `
                          left-0 top-6 z-10 
                          h-44 w-60 
                          rotate-[-8deg]
                        `
                        : i === 1
                        ? `
                          left-28 top-20 z-20 
                          h-44 w-64 
                          rotate-[4deg]
                        `
                        : `
                          left-16 top-40 z-30 
                          h-40 w-56 
                          rotate-[-5deg]
                        `
                    }`}
                  >
                    {/* Light Reflection */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-70" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FEATURED IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              {/* Reduced Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-sky-200/20 to-pink-200/15 blur-xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/20 shadow-lg">
                <img
                  src={
                    event?.featured ||
                    'https://placehold.co/800x600/111827/ffffff?text=No+Image'
                  }
                  alt={event?.title || 'Event'}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="700"
                  className="h-[480px] w-full object-cover transition-transform duration-200 hover:scale-[1.01]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-display text-3xl font-semibold text-white">
                    {event?.title || 'Untitled Event'}
                  </p>

                  <p className="mt-2 font-clean text-sm text-white/90">
                    EPOCH Tech Club Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Images */}
            <div className="mt-8 flex gap-4 overflow-x-auto md:hidden">
              {(event?.images || []).slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className="min-w-[220px] overflow-hidden rounded-2xl border border-white/30 bg-white/20"
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-40 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection