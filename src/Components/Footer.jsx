import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/Logo.png'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='bg-[#DDECEE] pt-14'>
      <div className='max-w-full w-[85%] mx-auto'>
        <div className='text-center'>
          <h2 className='text-[38px] md:text-[56px] font-extrabold leading-[1.2] text-[#082129]'>
            {t('newsletter.title')}
          </h2>
          <p className='mt-2 text-[34px] md:text-[50px] font-extrabold leading-[1.2] text-[#082129]'>
            Get The Best Offers
          </p>

          <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
            <span className='text-[20px] text-[#FF8238]'>With One Click</span>
            <button className='inline-flex items-center gap-3 rounded-full bg-[#FF8238] px-8 py-4 text-[18px] font-semibold text-white'>
              {t('newsletter.button')}
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                <path d='M13 6L19 12L13 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          </div>
        </div>

        <div className='mt-14 grid gap-8 lg:grid-cols-3 lg:items-end pb-12'>
          <div>
            <img src={Logo} alt='Amid logo' />
            <p className='mt-2 text-[14px] text-[#FF8238]'>{t('footer.agency')}</p>
          </div>

          <ul className='flex flex-wrap items-center justify-start gap-8 text-[18px] font-medium text-[#0E5B55] lg:justify-center'>
            <li>{t('footer.about')}</li>
            <li className='text-[#FF8238]'>Terms</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>

          <div className='space-y-1 text-[18px] text-[#0E5B55] lg:text-right'>
            <p>+998 1276 234</p>
            <p>82/93 Boeind Street. NY</p>
            <p>info@amid.mail.com</p>
          </div>
        </div>
      </div>

      <div className='bg-[#0E5B55] py-4'>
        <div className='max-w-full w-[85%] mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-[16px] text-[#DDECEE]'>All Rights Reserved @Debzui2020</p>
          <div className='flex items-center gap-4 text-[#DDECEE]'>
            <span className='h-4 w-4 rounded-full border border-[#DDECEE]' />
            <span className='h-4 w-4 rounded-full border border-[#DDECEE]' />
            <span className='h-4 w-4 rounded-full border border-[#DDECEE]' />
            <span className='h-4 w-4 rounded-full border border-[#DDECEE]' />
            <span className='h-4 w-4 rounded-full border border-[#DDECEE]' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
