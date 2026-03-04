import { createContext, useState } from "react";

export const THemeContext = createContext()
export const THemeProvider = function({children}) {
 const [theme, setTheme] = useState('light')

 const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
 }  
    return(
        <THemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </THemeContext.Provider>
    )

}
