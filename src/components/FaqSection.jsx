import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-300/10 blur-[120px]" />
      </div>

      {/* HEADING */}
      <div className="relative z-10 text-center">
        <p className="reveal font-clean text-[10px] tracking-[0.35em] text-[#6b7280] sm:text-xs">
          FAQ
        </p>

        <h2 className="reveal mt-4 font-display text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-6xl">
          Questions{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Answered
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
          Everything you need to know about the club, events, and how to get
          involved.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="relative z-10 mx-auto mt-14 max-w-5xl space-y-5">
        {faqs.map((item, index) => {
          const isActive = activeFaq === index

          return (
            <div
              key={item.question}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/70 shadow-[0_10px_40px_rgba(17,17,17,0.05)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/40 hover:bg-white/80 sm:rounded-[2rem] ${
                isActive
                  ? 'border-cyan-300/40 shadow-[0_20px_80px_rgba(94,217,243,0.12)]'
                  : ''
              }`}
            >
              {/* QUESTION */}
              <button
                type="button"
                onClick={() =>
                  setActiveFaq(isActive ? null : index)
                }
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-8 sm:py-7"
              >
                <h3 className="font-display text-lg font-semibold leading-snug text-[#111111] sm:text-2xl">
                  {item.question}
                </h3>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 transition duration-500 ${
                    isActive
                      ? 'rotate-180 border-cyan-300/40 bg-cyan-100'
                      : ''
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-cyan-500" />
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-500 ${
                  isActive
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-70'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-black/5 px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
                    <p className="max-w-3xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-pink-400/5 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection