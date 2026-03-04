import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from "../assets/Logo.png"
import { THemeContext } from '../Context/ThemeContext';

const Header = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.resolvedLanguage || i18n.language;
    const { theme, toggleTheme } = useContext(THemeContext)
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className={`w-full fixed z-50  bg-white ${theme === "light" ? "light-mode" : "dark-mode"}`}>
            <div id="container" className='max-w-full w-[85%] mx-auto '>
                <div id="header_wrapper" className='flex justify-between py-[20px] items-center '>
                    <img src={Logo} alt="img" />
                    <nav>
                        <ul className='list-none flex justify-center gap-15 '>
                            <li className='font-medium text-[16px]  '>{t("nav.about")}</li>
                            <li className='font-medium text-[16px]  '>{t("nav.features")}</li>
                            <li className='font-medium text-[16px]  '>{t("nav.portfolio")}</li>
                            <li className='font-medium text-[16px]  '>{t("nav.reviews")}</li>
                        </ul>
                    </nav>
                    <button className='rounded-full p-[10px] py-[13px]text-[#FFFFFF] bg-[#124F48] ' onClick={toggleTheme}>Toggle {theme}</button>
                    <div className='flex items-center gap-2 rounded-full bg-[#124F48] p-1'>
                        <button
                            onClick={() => changeLanguage("uz")}
                            className={`px-3 py-2 rounded-full text-[14px] font-bold transition ${currentLang?.startsWith("uz") ? "bg-white text-[#124F48]" : "text-white"}`}
                        >
                            UZ
                        </button>
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`px-3 py-2 rounded-full text-[14px] font-bold transition ${currentLang?.startsWith("en") ? "bg-white text-[#124F48]" : "text-white"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage("ru")}
                            className={`px-3 py-2 rounded-full text-[14px] font-bold transition ${currentLang?.startsWith("ru") ? "bg-white text-[#124F48]" : "text-white"}`}
                        >
                            RU
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
