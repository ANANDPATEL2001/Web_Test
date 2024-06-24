import { useTheme } from "./ThemeProvider"

const FunctionContextComponent = () => {

    // Here, we have used 'useContext' to create/use the 'context' wiith defined value
    // The hook returns the value of the context: value = useContext(Context). The hook also makes sure to re-render the component when the context value changes.

    // const darktheme = useContext(ThemeContext)
    // console.log("This is themeContext", ThemeContext)
    // console.log("This is darktheme", darktheme)

    const themeStyles = {
        backgroundColor: useTheme ? "black" : "white",
        color: useTheme ? "white" : "black",
        margin: "2rem",
        padding: "2rem"
    }

    return (
        <div style={themeStyles}>Functional Theme</div>
    )
}

export default FunctionContextComponent