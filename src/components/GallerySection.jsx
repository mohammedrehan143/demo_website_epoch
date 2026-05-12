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

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-40 h-[420px] w-[420px] rounded-full bg-pink-200/35 blur-[170px]" />

      <div className="absolute right-[-100px] top-[40%] h-[420px] w-[420px] rounded-full bg-sky-300/50 blur-[180px]" />

      <div className="absolute bottom-0 left-[35%] h-[320px] w-[320px] rounded-full bg-blue-200/40 blur-[150px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-clean text-xs tracking-[0.35em] text-pink-400"
        >
          GALLERY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-display text-5xl font-semibold leading-tight text-[#1d2d44] md:text-7xl"
        >
          Immersive <span className="text-sky-400">Event</span> Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl font-clean text-sm leading-7 text-[#526172] md:text-base"
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
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
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
              <div className="group relative mt-16 hidden h-[320px] w-full md:block">
                {(event?.images || []).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                    className={`absolute overflow-hidden rounded-[28px]
                    border border-white/50
                    bg-white/35
                    backdrop-blur-2xl
                    shadow-[0_10px_40px_rgba(96,165,250,0.18)]
                    transition-all duration-500 ease-out ${
                      i === 0
                        ? `
                          left-0 top-6 z-10 
                          h-44 w-60 
                          rotate-[-10deg]
                          group-hover:left-[-10px]
                          group-hover:top-0
                          group-hover:rotate-[-14deg]
                        `
                        : i === 1
                        ? `
                          left-28 top-16 z-20 
                          h-44 w-64 
                          rotate-[2deg]
                          group-hover:left-38
                          group-hover:top-8
                          group-hover:rotate-[7deg]
                        `
                        : `
                          left-16 top-32 z-30 
                          h-40 w-56 
                          rotate-[-4deg]
                          group-hover:left-10
                          group-hover:top-38
                          group-hover:rotate-[-9deg]
                        `
                    }`}
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        width="600"
                        height="400"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-pink-100/15" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FEATURED IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-sky-200/40 to-pink-200/25 blur-3xl transition duration-500 group-hover:scale-105" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white/35 shadow-2xl backdrop-blur-2xl">
                <img
                  src={
                    event?.featured ||
                    'https://placehold.co/800x600/111827/ffffff?text=No+Image'
                  }
                  alt={event?.title || 'Event'}
                  width="1200"
                  height="700"
                  className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
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
              {(event?.images || []).map((img, i) => (
                <div
                  key={i}
                  className="min-w-[220px] overflow-hidden rounded-2xl border border-white/50 bg-white/35 backdrop-blur-2xl"
                >
                  <img
                    src={img}
                    alt=""
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