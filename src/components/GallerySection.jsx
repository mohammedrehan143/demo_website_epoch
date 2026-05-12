import { motion } from 'framer-motion'
import { gallery } from '../data/siteData'

function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative mt-32 overflow-hidden px-4 py-24 md:px-10"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12081f] to-transparent" />

      <div className="absolute left-[-120px] top-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="absolute right-[-100px] top-[40%] h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-clean text-xs tracking-[0.35em] text-tech-muted"
        >
          GALLERY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl"
        >
          Immersive <span className="text-tech-pink">Event</span> Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl font-clean text-sm leading-7 text-tech-muted md:text-base"
        >
          Every event tells a story — innovation, collaboration, creativity,
          and unforgettable moments built together by our community.
        </motion.p>
      </div>

      {/* Events */}
      <div className="relative z-10 mt-32 space-y-44">
        {(gallery || []).map((event, index) => (
          <div
            key={event?.id || index}
            className={`grid items-center gap-16 md:grid-cols-2 ${
              index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Small Label */}
              <p className="font-clean text-xs tracking-[0.3em] text-tech-pink">
                EVENT EXPERIENCE
              </p>

              {/* Title */}
              <h3 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                {event?.title || 'Untitled Event'}
              </h3>

              {/* Description */}
              <p className="mt-8 max-w-xl font-clean text-sm leading-7 text-white/70 md:text-base">
                {event?.description || 'No description available'}
              </p>

              {/* Playing Cards Floating Images */}
              <div className="group relative mt-16 hidden h-[320px] w-full md:block">
                {(event?.images || []).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.15,
                    }}
                    className={`absolute overflow-hidden rounded-[28px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out group-hover:shadow-[0_30px_100px_rgba(255,255,255,0.08)] ${
                      i === 0
                        ? `
                          left-0 top-6 z-10 
                          h-44 w-60 
                          rotate-[-10deg]
                          group-hover:left-[-20px]
                          group-hover:top-0
                          group-hover:rotate-[-18deg]
                        `
                        : i === 1
                        ? `
                          left-28 top-16 z-20 
                          h-44 w-64 
                          rotate-[2deg]
                          group-hover:left-44
                          group-hover:top-8
                          group-hover:rotate-[10deg]
                        `
                        : `
                          left-16 top-32 z-30 
                          h-40 w-56 
                          rotate-[-4deg]
                          group-hover:left-10
                          group-hover:top-44
                          group-hover:rotate-[-14deg]
                        `
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FEATURED IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-tech-pink/10 blur-3xl transition duration-700 group-hover:scale-110" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] backdrop-blur-md">
                <img
                  src={
                    event?.featured ||
                    'https://placehold.co/800x600/111827/ffffff?text=No+Image'
                  }
                  alt={event?.title || 'Event'}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-display text-3xl font-semibold text-white">
                    {event?.title || 'Untitled Event'}
                  </p>

                  <p className="mt-2 font-clean text-sm text-white/70">
                    EPOCH Tech Club Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Floating Images */}
            <div className="mt-8 flex gap-4 overflow-x-auto md:hidden">
              {(event?.images || []).map((img, i) => (
                <div
                  key={i}
                  className="min-w-[220px] overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={img}
                    alt=""
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