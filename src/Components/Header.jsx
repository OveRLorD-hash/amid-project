import React from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Logo from "../assets/Logo.png"

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className='bg-white '>
            <div id="container" className='max-w-full w-[85%] mx-auto '>
                <div id="header_wrapper" className='flex justify-between py-[20px] items-center '>
                    <img src={Logo} alt="img" />
                    <nav>
                        <ul className='list-none flex justify-center gap-15 '>
                            <li className='font-medium text-[16px] text-[#0B041B] '>{t("nav.about")}</li>
                            <li className='font-medium text-[16px] text-[#0B041B] '>{t("nav.features")}</li>
                            <li className='font-medium text-[16px] text-[#0B041B] '>{t("nav.portfolio")}</li>
                            <li className='font-medium text-[16px] text-[#0B041B] '>{t("nav.reviews")}</li>
                        </ul>
                    </nav>
                    <button className='font-bold text-[18px] text-white w-32 bg-[#124F48] py-4 rounded-4xl '>{t("nav.tuggle")}</button>
                </div>
            </div>
        </div>
    )
}

export default Header
