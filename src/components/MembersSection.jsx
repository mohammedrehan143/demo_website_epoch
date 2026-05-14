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

      <div className="members-swiper-host relative mt-8 overflow-hidden">
        <div className="members-swiper-glow" aria-hidden />

        <Swiper
          className="members-swiper"
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          spaceBetween={16}
          slidesPerView={1.08}
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
            <SwiperSlide key={member.id} className="!h-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveMember(member.id)}
                className={`tilt-3d team-card-fx group flex min-h-[320px] w-full flex-col items-center rounded-[1.8rem] border border-tech-line bg-tech-card/85 p-3 text-left shadow-[0_18px_40px_rgba(17,17,17,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-tech-accent/50 hover:shadow-[0_20px_60px_rgba(17,17,17,0.16),0_0_0_1px_rgba(232,90,207,0.18),0_0_48px_rgba(94,217,243,0.14)] focus-visible:outline-none sm:min-h-[360px] sm:rounded-[2rem] sm:p-4 ${
                  activeMember === member.id
                    ? 'border-tech-pink/70 shadow-[0_22px_64px_rgba(232,90,207,0.18),0_0_0_1px_rgba(94,217,243,0.32),0_0_48px_rgba(94,217,243,0.22)]'
                    : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-1 shadow-inner shadow-black/10 sm:rounded-[1.75rem]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[200px] w-full rounded-[1.2rem] object-cover sm:h-[220px] sm:rounded-[1.5rem]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="mt-4 w-full text-center">
                  <p className="font-display text-base font-semibold text-white sm:text-xl">
                    {member.name}
                  </p>

                  <p className="mt-2 text-xs text-tech-muted sm:text-base">
                    {member.role}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================================================
          PRESENT TEAM
      ========================================================= */}

      <section className="relative mt-24 overflow-hidden sm:mt-32">
        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-[120px] sm:h-72 sm:w-72" />
          <div className="absolute right-0 top-1/3 h-52 w-52 rounded-full bg-pink-300/10 blur-[120px] sm:h-72 sm:w-72" />
        </div>

        {/* HEADING */}
        <div className="relative z-10 text-center">
          <p className="font-clean text-[10px] tracking-[0.35em] text-tech-muted sm:text-xs">
            PRESENT MEMBERS
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Meet The{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Present Team
            </span>
          </h2>
        </div>

        {[
          {
            title: 'Core Team',
            members: [
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
                role: 'Secretary',
                name: 'Rahul Verma',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Joint Secretary',
                name: 'Neha Gupta',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Executive',
                name: 'Kabir Khan',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },
            ],
          },

          {
            title: 'Tech Team',
            members: [
              {
                role: 'Tech Head',
                name: 'Aditya Nair',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Frontend',
                name: 'Vihaan Singh',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Backend',
                name: 'Rohit Jain',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'UI Engineer',
                name: 'Aman Roy',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Developer',
                name: 'Karan Das',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },
            ],
          },

          {
            title: 'Design Team',
            members: [
              {
                role: 'Design Head',
                name: 'Sara Menon',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'UI Designer',
                name: 'Ananya Das',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Graphic Designer',
                name: 'Ishita Rao',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Creative Lead',
                name: 'Priya Kulkarni',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Motion Designer',
                name: 'Diya Kapoor',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },
            ],
          },

          {
            title: 'Event Team',
            members: [
              {
                role: 'Event Head',
                name: 'Ishita Rao',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Coordinator',
                name: 'Arjun Patel',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Management',
                name: 'Riya Sharma',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Operations',
                name: 'Rahul Mehta',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Volunteer Lead',
                name: 'Sneha Joshi',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
              },
            ],
          },

          {
            title: 'PR Team',
            members: [
              {
                role: 'PR Head',
                name: 'Vihaan Singh',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Outreach',
                name: 'Neha Kapoor',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Social Media',
                name: 'Aisha Khan',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Branding',
                name: 'Rohan Verma',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
              },

              {
                role: 'Marketing',
                name: 'Kriti Nair',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
              },
            ],
          },
        ].map((team, index) => (
          <div key={index} className="relative z-10 mt-20 sm:mt-28">
            {/* TEAM TITLE */}
            <div className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-300/30" />

              <h3 className="text-center font-display text-2xl font-semibold text-white sm:text-3xl">
                {team.title}
              </h3>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-300/30" />
            </div>

            {/* TEAM GRID */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5 sm:gap-6">
              {team.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_25px_80px_rgba(94,217,243,0.16)] sm:rounded-[2rem] ${
                    idx === 0
                      ? 'xl:-translate-y-3 xl:border-cyan-300/30'
                      : ''
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.7rem]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[340px]"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-pink-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-7 left-0 w-full px-6 sm:bottom-8 sm:px-7">
                    <p className="text-[10px] tracking-[0.25em] text-cyan-300 sm:text-xs sm:tracking-[0.3em]">
                      {member.role}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {member.name}
                    </h3>
                  </div>

                  {/* PREMIUM BORDER */}
                  <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] border border-white/5 sm:rounded-[2rem]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default MembersSection