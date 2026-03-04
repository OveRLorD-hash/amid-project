import React from 'react'
import { useTranslation } from 'react-i18next'
import HeroGirl from '../assets/pleased-satisfied-2-removebg 1.png'
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector (1).png'
import vector2 from '../assets/Vector (2).png'
import group from '../assets/Group 200.png'
import netflix from '../assets/netflix.png'
import forbes from '../assets/forbes.png'
import itel from '../assets/itel.png'
import fedex from '../assets/fedex.png'
import audiomack from '../assets/audiomask.png'
import penguines from '../assets/penguines.png'
import sariqDumoaloq from '../assets/sariqDumoaloq.png'
import gotoMeeting from '../assets/gotoMiting.png'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-white'>
      <main>
        <section className='max-w-full w-[85%] mx-auto py-5'>
          <div className='relative overflow-hidden border border-[#89B2FF] rounded-2xl bg-[#E3F1F2] px-6 py-12 md:px-10 lg:px-14 lg:py-16'>
            <div className='grid items-center gap-10 lg:grid-cols-2'>
              <div className='max-w-[520px]'>
                <span className='inline-block bg-[#FDEEE8] text-[#FF7E36] text-[18px] px-4 py-1.5 rounded-[4px]'>
                  {t('hero.badge')}
                </span>

                <h1 className='mt-6 text-[#082129] font-extrabold leading-[1.05] text-[42px] md:text-[56px]'>
                  {t('hero.title')}
                </h1>

                <p className='mt-8 text-[#51646A] text-[20px] leading-[1.65] max-w-[480px]'>
                  {t('hero.description')}
                </p>

                <div className='mt-10 flex flex-wrap items-center gap-5'>
                  <button className='rounded-full bg-[#FF8238] text-white px-9 py-4 text-[24px] font-semibold'>
                    {t('hero.getStarted')}
                  </button>

                  <button className='flex items-center gap-4 text-[#FF8238] uppercase font-semibold tracking-wide text-[23px]'>
                    <span className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.06)]'>
                      <span className='ml-0.5 block h-0 w-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-[#FF8238]' />
                    </span>
                    {t('hero.demoVideo')}
                  </button>
                </div>
              </div>

              <div className='relative min-h-[520px]'>
                <span className='absolute top-0 right-8 w-4 h-4 rounded-full bg-[#0E5B55]' />
                <span className='absolute top-[72px] left-8 w-4 h-4 rounded-full bg-[#FF8238]' />
                <span className='absolute top-[68%] left-0 w-4 h-4 rounded-full bg-[#5AAEFF]' />

                <div className='absolute top-4 right-4 w-[430px] h-[430px] rounded-full bg-[#0E5B55] md:w-[500px] md:h-[500px]' />

                <img
                  src={HeroGirl}
                  alt='hero girl'
                  className='relative z-10 mx-auto w-full max-w-[520px] object-contain'
                />

                <div className='absolute z-20 bottom-0 left-3/5 -translate-x-1/2 w-[250px] md:w-[300px] rounded-[18px] bg-white/50 backdrop-blur-sm p-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='h-[72px] rounded-2xl bg-[#F5CB2F] flex items-center justify-center'>
                      <img src={vector} alt='briefcase' />
                    </div>
                    <div className='h-[72px] rounded-2xl bg-[#2AAA63] flex items-center justify-center'>
                      <img src={vector1} alt='chart up' />
                    </div>
                    <div className='h-[72px] rounded-2xl bg-[#2F92FF] flex items-center justify-center'>
                      <img src={group} alt='database' />
                    </div>
                    <div className='h-[72px] rounded-2xl bg-[#FF8238] flex items-center justify-center'>
                      <img src={vector2} alt='bar chart' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white mt-10 py-12'>
          <div className='max-w-full w-[85%] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={netflix} alt='Netflix' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={forbes} alt='Forbes' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={itel} alt='Itel' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={fedex} alt='FedEx' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={audiomack} alt='Audiomack' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={penguines} alt='Penguines' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={sariqDumoaloq} alt='Logo' className='max-h-[48px] object-contain' />
              </div>
              <div className='h-[96px] rounded-xl bg-[#EAF1F3] flex items-center justify-center'>
                <img src={gotoMeeting} alt='GoToMeeting' className='max-h-[48px] object-contain' />
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#F7F8F8] py-16 lg:py-20'>
          <div className='max-w-full w-[85%] mx-auto'>
            <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
              <div>
                <span className='inline-block rounded-[4px] border border-[#EAECEC] bg-white px-5 py-2 text-[16px] font-semibold lowercase tracking-[0.08em] text-[#FF8238]'>
                  {t('services.label')}
                </span>
                <h2 className='mt-5 max-w-[560px] text-[42px] font-extrabold leading-[1.2] text-[#082129] md:text-[56px]'>
                  {t('services.title')}
                </h2>
              </div>
              <p className='max-w-[480px] text-[18px] leading-[1.8] text-[#4E5A5E] lg:justify-self-end'>
                {t('services.description')}
              </p>
            </div>

            <div className='mt-10 grid gap-6 lg:grid-cols-3'>
              <article className='rounded-[26px] p-8'>
                <div className='flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#DDF3E8] text-[#0E5B55]'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <rect x='3' y='5' width='18' height='14' rx='2' stroke='currentColor' strokeWidth='1.8' />
                    <path d='M3 10.5H21' stroke='currentColor' strokeWidth='1.8' />
                    <path d='M7.5 15H11' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  </svg>
                </div>
                <h3 className='mt-7 text-[36px] font-extrabold leading-[1.3] text-[#082129]'>
                  {t('services.businessSupport.title')}
                </h3>
                <p className='mt-5 text-[18px] leading-[1.9] text-[#4E5A5E]'>
                  {t('services.businessSupport.description')}
                </p>
                <a href='#' className='mt-8 inline-flex items-center gap-3 text-[28px] font-semibold text-[#0E5B55]'>
                  {t('services.learnMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </a>
              </article>

              <article className='rounded-[26px] bg-white p-8 shadow-[0_20px_60px_rgba(8,33,41,0.08)]'>
                <div className='flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#F6EECC] text-[#FF8238]'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M8 8V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V7C16 5.34315 14.6569 4 13 4C11.3431 4 10 5.34315 10 7V15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15V8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <h3 className='mt-7 text-[36px] font-extrabold leading-[1.3] text-[#082129]'>
                  {t('services.community.title')}
                </h3>
                <p className='mt-5 text-[18px] leading-[1.9] text-[#4E5A5E]'>
                  {t('services.community.description')}
                </p>
                <a
                  href='#'
                  className='mt-8 inline-flex h-[64px] min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#FF8238] px-8 text-[28px] font-semibold text-white'
                >
                  {t('services.learnMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </a>
              </article>

              <article className='rounded-[26px] p-8'>
                <div className='flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#FBE8DF] text-[#FF6A2C]'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M12 3V12H21' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M20.5 13.5C19.6716 17.7012 15.9856 20.8 11.5 20.8C6.40292 20.8 2.3 16.6971 2.3 11.6C2.3 7.11442 5.39878 3.42836 9.6 2.6' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  </svg>
                </div>
                <h3 className='mt-7 text-[36px] font-extrabold leading-[1.3] text-[#082129]'>
                  {t('services.discovery.title')}
                </h3>
                <p className='mt-5 text-[18px] leading-[1.9] text-[#4E5A5E]'>
                  {t('services.discovery.description')}
                </p>
                <a href='#' className='mt-8 inline-flex items-center gap-3 text-[28px] font-semibold text-[#0E5B55]'>
                  {t('services.learnMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className='bg-[#F7F8F8] pb-16 lg:pb-24'>
          <div className='max-w-full w-[85%] mx-auto'>
            <div className='grid gap-10 lg:grid-cols-2 lg:items-start'>
              <div>
                <span className='inline-block rounded-[4px] border border-[#EAECEC] bg-white px-5 py-2 text-[16px] font-semibold lowercase tracking-[0.08em] text-[#FF8238]'>
                  {t('stats.label')}
                </span>
                <h2 className='mt-5 max-w-[620px] text-[40px] font-extrabold leading-[1.25] text-[#082129] md:text-[56px]'>
                  {t('stats.titleBefore')} <span className='text-[#FF8238]'>100+</span> {t('stats.titleMiddle')}{' '}
                  <span className='text-[#FF8238]'>10</span> {t('stats.titleAfter')}
                </h2>
              </div>

              <div className='space-y-6 pt-2'>
                <div className='grid gap-2 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-4'>
                  <p className='text-[42px] font-extrabold leading-none text-[#9AB0B2]'>9k+</p>
                  <p className='text-[19px] font-semibold leading-[1.4] text-[#0E5B55]'>{t('stats.completedProjects')}</p>
                  <p className='text-[16px] font-semibold text-[#FF8238]'>{t('stats.fromCompanies')}</p>
                </div>
                <div className='grid gap-2 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-4'>
                  <p className='text-[42px] font-extrabold leading-none text-[#9AB0B2]'>924+</p>
                  <p className='text-[19px] font-semibold leading-[1.4] text-[#0E5B55]'>{t('stats.happyClients')}</p>
                  <p className='text-[16px] font-semibold text-[#FF8238]'>{t('stats.fromCountries100')}</p>
                </div>
                <div className='grid gap-2 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-4'>
                  <p className='text-[42px] font-extrabold leading-none text-[#9AB0B2]'>416</p>
                  <p className='text-[19px] font-semibold leading-[1.4] text-[#0E5B55]'>{t('stats.employees')}</p>
                  <p className='text-[16px] font-semibold text-[#FF8238]'>{t('stats.fromCountries20')}</p>
                </div>
                <div className='grid gap-2 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-4'>
                  <p className='text-[42px] font-extrabold leading-none text-[#9AB0B2]'>3024</p>
                  <p className='text-[19px] font-semibold leading-[1.4] text-[#0E5B55]'>{t('stats.caseStudies')}</p>
                  <p className='text-[16px] font-semibold text-[#FF8238]'>{t('stats.fromCountries100')}</p>
                </div>
              </div>
            </div>

            <div className='mt-12 grid gap-8 lg:grid-cols-2'>
              <article>
                <div className='relative overflow-hidden rounded-[20px] bg-[#DEF2F4] p-6'>
                  <div className='absolute -bottom-[90px] left-[-30px] h-[190px] w-[190px] rounded-full border-2 border-[#FF8238]' />
                  <div className='absolute -bottom-[115px] left-[35px] h-[230px] w-[230px] rounded-full border-2 border-[#69C8FF]' />
                  <div className='absolute -bottom-[130px] right-[-45px] h-[260px] w-[260px] rounded-full bg-[#0E5B55]' />

                  <div className='relative mx-auto max-w-[360px] rounded-[16px] border border-[#ECEFF0] bg-white p-4 shadow-[0_24px_44px_rgba(8,33,41,0.12)]'>
                    <div className='h-[220px] rounded-[10px] bg-gradient-to-b from-[#F5F7FF] to-[#FFFFFF]' />
                  </div>
                </div>

                <h3 className='mt-6 text-[34px] font-extrabold text-[#082129]'>{t('portfolio.jobhub.title')}</h3>
                <p className='mt-4 max-w-[560px] text-[18px] leading-[1.9] text-[#4E5A5E]'>
                  {t('portfolio.jobhub.description')}
                </p>
                <button className='mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF8238] px-8 py-4 text-[19px] font-semibold text-white'>
                  {t('portfolio.jobhub.viewMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </button>
              </article>

              <article className='lg:pt-20'>
                <div className='relative overflow-hidden rounded-[20px] bg-[#F3EDEA] p-6'>
                  <div className='absolute -bottom-[140px] right-[-10px] h-[260px] w-[260px] rounded-full bg-[#0E5B55]' />
                  <div className='absolute -bottom-[90px] left-[-35px] h-[190px] w-[190px] rounded-full border-2 border-[#69C8FF]' />
                  <div className='absolute -bottom-[40px] left-[-70px] h-[160px] w-[160px] rounded-full border-2 border-[#FF8238]' />

                  <div className='relative mx-auto max-w-[360px] rounded-[16px] border border-[#ECEFF0] bg-white p-4 shadow-[0_24px_44px_rgba(8,33,41,0.12)]'>
                    <div className='h-[220px] rounded-[10px] bg-gradient-to-b from-[#FFF7F2] to-[#FFFFFF]' />
                  </div>
                </div>

                <h3 className='mt-6 text-[34px] font-extrabold text-[#082129]'>{t('portfolio.cent.title')}</h3>
                <p className='mt-4 max-w-[560px] text-[18px] leading-[1.9] text-[#4E5A5E]'>
                  {t('portfolio.cent.description')}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='bg-[#F7F8F8] pb-20 lg:pb-28'>
          <div className='max-w-full w-[85%] mx-auto'>
            <div className='text-center'>
              <span className='inline-block rounded-[4px] border border-[#EAECEC] bg-white px-5 py-2 text-[16px] font-semibold lowercase tracking-[0.08em] text-[#FF8238]'>
                {t('blog.label')}
              </span>
              <h2 className='mt-5 text-[40px] font-extrabold leading-[1.2] text-[#082129] md:text-[56px]'>
                {t('blog.title')}
              </h2>
              <p className='mx-auto mt-4 max-w-[740px] text-[18px] leading-[1.8] text-[#4E5A5E]'>
                {t('blog.description')}
              </p>
            </div>

            <div className='mt-8 flex justify-center lg:justify-end gap-3'>
              <button className='flex h-11 w-11 items-center justify-center rounded-full border border-[#D5DEE0] text-[#0E5B55]'>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                  <path d='M19 12H5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  <path d='M11 18L5 12L11 6' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
              <button className='flex h-11 w-11 items-center justify-center rounded-full border border-[#D5DEE0] text-[#0E5B55]'>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                  <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>

            <div className='mt-6 grid gap-8 lg:grid-cols-2'>
              <article className='rounded-[10px] bg-white p-4 lg:p-5'>
                <div className='relative'>
                  <div className='h-[250px] rounded-[6px] bg-gradient-to-r from-[#E7F0F2] to-[#DDE8EB]' />
                  <div className='absolute -top-3 right-5 rounded-[8px] bg-[#0E5B55] px-4 py-2 text-center text-white'>
                    <p className='text-[24px] font-extrabold leading-none'>22</p>
                    <p className='text-[20px] font-bold leading-none mt-1'>{t('blog.monthShort')}</p>
                  </div>
                </div>
                <h3 className='mt-6 text-[34px] font-extrabold leading-[1.3] text-[#082129]'>
                  {t('blog.post1')}
                </h3>
                <p className='mt-4 text-[18px] leading-[1.8] text-[#4E5A5E]'>
                  {t('blog.description')}
                </p>
                <a
                  href='#'
                  className='mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF8238] px-8 py-4 text-[19px] font-semibold text-white'
                >
                  {t('blog.learnMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </a>
              </article>

              <article className='rounded-[10px] bg-white p-4 lg:p-5'>
                <div className='relative'>
                  <div className='h-[250px] rounded-[6px] bg-gradient-to-r from-[#EDE5DF] to-[#E5ECF0]' />
                  <div className='absolute -top-3 right-5 rounded-[8px] bg-[#0E5B55] px-4 py-2 text-center text-white'>
                    <p className='text-[24px] font-extrabold leading-none'>16</p>
                    <p className='text-[20px] font-bold leading-none mt-1'>{t('blog.monthShort')}</p>
                  </div>
                </div>
                <h3 className='mt-6 text-[34px] font-extrabold leading-[1.3] text-[#082129]'>
                  {t('blog.post2')}
                </h3>
                <p className='mt-4 text-[18px] leading-[1.8] text-[#4E5A5E]'>
                  {t('blog.description')}
                </p>
                <a href='#' className='mt-8 inline-flex items-center gap-3 text-[22px] font-semibold text-[#0E5B55]'>
                  {t('blog.learnMore')}
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero
