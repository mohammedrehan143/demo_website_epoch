import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { members } from '../data/siteData'

function MembersSection() {
  const reduced = useReducedMotion()
  const [activeMember, setActiveMember] = useState(null)

  return (
    <section id="members" className="reveal-root mt-10">
      <p className="reveal font-clean text-xs tracking-[0.24em] text-tech-muted">MEMBERS</p>
      <h2 className="reveal mt-2 font-display text-4xl font-semibold md:text-6xl">
        Our <span className="text-tech-pink">#1</span> Goal Was To Build{' '}
        <span className="text-transparent [-webkit-text-stroke:1px_rgba(17,17,17,0.28)]">A Great Team</span>
      </h2>

      <div className="members-swiper-host relative mt-6 overflow-hidden">
        <div className="members-swiper-glow" aria-hidden />

        <Swiper
          className="members-swiper"
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          spaceBetween={18}
          slidesPerView={1}
          centeredSlides={false}
          slideToClickedSlide={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 22 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          rewind={true}
          speed={620}
          grabCursor
          keyboard={{ enabled: true }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={
            reduced
              ? false
              : {
                  delay: 4200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
        >
          {members.map((member) => (
            <SwiperSlide key={member.id} className="!h-auto">
              <button
                type="button"
                onClick={() => setActiveMember(member.id)}
                className={`tilt-3d team-card-fx group flex min-h-[360px] w-full flex-col items-center rounded-[2rem] border border-tech-line bg-tech-card/85 p-4 text-left shadow-[0_18px_40px_rgba(17,17,17,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-tech-accent/50 hover:shadow-[0_20px_60px_rgba(17,17,17,0.16),0_0_0_1px_rgba(232,90,207,0.18),0_0_48px_rgba(94,217,243,0.14)] focus-visible:outline-none ${
                  activeMember === member.id
                    ? 'border-tech-pink/70 shadow-[0_22px_64px_rgba(232,90,207,0.18),0_0_0_1px_rgba(94,217,243,0.32),0_0_48px_rgba(94,217,243,0.22)]'
                    : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-1 shadow-inner shadow-black/10">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[220px] w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="mt-4 w-full text-center">
                  <p className="font-display text-lg font-semibold text-white sm:text-xl">{member.name}</p>
                  <p className="mt-2 text-sm text-tech-muted sm:text-base">{member.role}</p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MembersSection
