import React, { Component } from 'react'
import { ThemeContext } from './ThemeProvider'

class ClassContextComponent extends React.Component {

    themeStyles(dark) {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
            margin: "2rem",
            padding: "2rem"
        }
    }

    render() {
        return (
            <>
                {/* This ThemeContext.Consumer is used to consume all the context of React & it only accept one child as a function */}
                <ThemeContext.Consumer>
                    {
                        context => {
                            return (
                                <div style={this.themeStyles(context)}>Class Theme</div>
                            )
                        }

                    }
                </ThemeContext.Consumer>
            </>
        )

    }
}
// ClassContextComponent.contextType = Hooks_useContext;


export default ClassContextComponent