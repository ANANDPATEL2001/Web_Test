import FunctionContextComponent from "./functionContextComponent"
// import ClassContextComponent from "./classContextComponent"
import ThemeProvider, { useThemeUpdate } from "./ThemeProvider"

const Hooks_useContext = () => {
    // const [darkTheme, setDarkTheme] = useState(false)

    // const toggleTheme = () => {
    //     // console.log("Value of darkTheme", darkTheme)
    //     setDarkTheme(prevDarkTheme => {
    //         // console.log(!prevDarkTheme)
    //         return !prevDarkTheme
    //     })
    // }
    return (
        <>
            <ThemeProvider >
                <button onClick={useThemeUpdate}>Toggle Theme</button>
                <FunctionContextComponent />
                {/* <ClassContextComponent /> */}
            </ThemeProvider>
        </>
    )
}

export default Hooks_useContext