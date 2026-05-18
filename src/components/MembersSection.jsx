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

  const presentMembers = [
    {
      role: 'President',
      name: 'Aarav Sharma',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'Vice President',
      name: 'Maya Iyer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'Tech Head',
      name: 'Aditya Nair',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'UI Designer',
      name: 'Ananya Das',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'Event Head',
      name: 'Ishita Rao',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'PR Head',
      name: 'Vihaan Singh',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'Frontend Developer',
      name: 'Rohit Jain',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
    },

    {
      role: 'Graphic Designer',
      name: 'Sara Menon',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section
      id="members"
      className="reveal-root mt-14 px-4 sm:px-6 lg:mt-10 lg:px-0"
    >
      {/* =========================================================
          FORMER MEMBERS
      ========================================================= */}

      <p className="reveal font-clean text-[10px] tracking-[0.24em] text-tech-muted sm:text-xs">
        FORMER MEMBERS
      </p>

      <h2 className="reveal mt-3 max-w-5xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Our <span className="text-tech-pink">#1</span> Goal Was To Build{' '}
        <span className="text-transparent [-webkit-text-stroke:1px_rgba(17,17,17,0.28)]">
          A Great Team
        </span>
      </h2>

      {/* =========================================================
          FORMER MEMBERS SLIDER
      ========================================================= */}

      <div className="members-swiper-host relative mt-8 overflow-hidden">
        <Swiper
          className="members-swiper"
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          spaceBetween={18}
          slidesPerView={1.1}
          centeredSlides={false}
          slideToClickedSlide={true}
          breakpoints={{
            480: { slidesPerView: 1.4, spaceBetween: 18 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 22 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          rewind
          speed={650}
          grabCursor
          keyboard={{ enabled: true }}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
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
            <SwiperSlide key={member.id} className="!h-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveMember(member.id)}
                className={`group relative overflow-hidden rounded-[1.8rem] bg-[#070b2a] transition-all duration-500 hover:-translate-y-2 ${
                  activeMember === member.id
                    ? 'shadow-[0_0_40px_rgba(91,180,255,0.18)]'
                    : ''
                }`}
              >
                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px]"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                  {/* SOFT GLOW */}

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* LIGHT SWEEP */}

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />
                </div>

                {/* TEXT */}

                <div className="absolute bottom-5 left-0 w-full px-5 text-left">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-2xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-cyan-200/70 sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================================================
          PRESENT MEMBERS
      ========================================================= */}

      <section className="relative mt-28 overflow-hidden">
        <p className="font-clean text-[10px] tracking-[0.35em] text-tech-muted sm:text-xs">
          PRESENT MEMBERS
        </p>

        <h2 className="mt-4 max-w-5xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Meet The{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Present Team
          </span>
        </h2>

        {/* =========================================================
            PRESENT MEMBERS SLIDER
        ========================================================= */}

        <div className="members-swiper-host relative mt-10 overflow-hidden">
          <Swiper
            className="members-swiper"
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            spaceBetween={18}
            slidesPerView={1.1}
            centeredSlides={false}
            slideToClickedSlide={true}
            breakpoints={{
              480: { slidesPerView: 1.4, spaceBetween: 18 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 22 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            rewind
            speed={650}
            grabCursor
            keyboard={{ enabled: true }}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
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
            {presentMembers.map((member, idx) => (
              <SwiperSlide key={idx} className="!h-auto pb-2">
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-[1.8rem] bg-[#070b2a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(91,180,255,0.16)]"
                >
                  {/* IMAGE */}

                  <div className="relative overflow-hidden rounded-[1.8rem]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px]"
                    />

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                    {/* SOFT GLOW */}

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* LIGHT SWEEP */}

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />
                  </div>

                  {/* TEXT */}

                  <div className="absolute bottom-5 left-0 w-full px-5 text-left">
                    <h3 className="font-display text-lg font-semibold text-white sm:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-cyan-200/70 sm:text-sm">
                      {member.role}
                    </p>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  )
}

export default MembersSection