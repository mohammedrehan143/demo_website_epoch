import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How can I join the tech club?',
    answer:
      'Use the Join Club button or contact the student coordinators in person during orientation week.',
  },

  {
    question: 'Do beginners get support?',
    answer:
      'Yes. We run starter sessions for web, AI, and design before advanced project tracks begin.',
  },

  {
    question: 'Can I propose my own event idea?',
    answer:
      'Absolutely. Submit your event brief and the team reviews logistics and mentor availability.',
  },
]

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section
      id="faq"
      className="reveal-root relative mt-24 overflow-hidden px-4 sm:px-6 lg:px-0"
    >
      {/* Ultra Smooth Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-300/10 blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-center"
      >
        <p className="font-clean text-[10px] tracking-[0.35em] text-[#6b7280] sm:text-xs">
          FAQ
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-6xl">
          Questions{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Answered
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
          Everything you need to know about the club, events, and how to get
          involved.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="relative z-10 mx-auto mt-14 max-w-5xl space-y-6">
        {faqs.map((item, index) => {
          const isActive = activeFaq === index

          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/70 shadow-[0_10px_40px_rgba(17,17,17,0.05)] backdrop-blur-2xl transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/80 hover:shadow-[0_25px_80px_rgba(94,217,243,0.12)] sm:rounded-[2rem] ${
                isActive
                  ? 'border-cyan-300/40 shadow-[0_20px_90px_rgba(94,217,243,0.14)]'
                  : ''
              }`}
            >
              {/* Premium Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-pink-400/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Question */}
              <button
                type="button"
                onClick={() =>
                  setActiveFaq(isActive ? null : index)
                }
                className="relative z-10 flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-8 sm:py-7"
              >
                <h3 className="font-display text-lg font-semibold leading-snug text-[#111111] transition-colors duration-500 group-hover:text-cyan-600 sm:text-2xl">
                  {item.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: isActive ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-700 ${
                    isActive
                      ? 'border-cyan-300/40 bg-cyan-100/80 shadow-[0_10px_30px_rgba(94,217,243,0.18)]'
                      : ''
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-cyan-500" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-black/5 px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-3xl text-sm leading-relaxed text-[#4b5563] sm:text-base"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection