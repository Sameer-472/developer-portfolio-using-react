import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider