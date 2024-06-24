import React, { useContext, useState } from "react"

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

const ThemeProvider = ({ childern }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        // console.log("Value of darkTheme", darkTheme)
        setDarkTheme(prevDarkTheme => {
            // console.log(!prevDarkTheme)
            return !prevDarkTheme
        })
    }
    return (
        <>
            <ThemeContext.Provider value={darkTheme} >
                <ThemeUpdateContext value={toggleTheme}>
                    {console.log("Value passed as darkTheme", darkTheme)}
                    {console.log("Value passed as toggleTheme", toggleTheme)}
                    {/* The above 'darkTheme' & 'toggleTheme' value as passed will be accessible by all the  components and their sub-components of the below compoenents used */}
                    {/* It prevents the need to pass the props in each of the component manually */}
                    {childern}
                </ThemeUpdateContext>
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider