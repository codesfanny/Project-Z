import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { createContext } from 'react'
import { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi2'
import AnimatedRoutes from './component/AnimatedRoutes'

export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme')
        return storedTheme || 'light'
    })

    const toggleTheme = () => {
        setTheme((curr) => {
            const newSwitch = curr === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newSwitch)
            return newSwitch
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <div className="switcher">
                    {theme === 'light' ? (
                        <span onClick={toggleTheme} className="text-xs cursor-pointer">
                            Dark Mode{' '}
                            <div className="inline float-end pl-2 pt-1 cursor-pointer">
                                <HiMoon fontSize={18} />
                            </div>
                        </span>
                    ) : (
                        <span onClick={toggleTheme} className="text-[#a5a5a5] text-xs cursor-pointer">
                            Light Mode{' '}
                            <div className="inline float-end pl-2 pt-1 cursor-pointer">
                                <HiSun color="white" fontSize={20} />
                            </div>
                        </span>
                    )}
                </div>
                <Router>
                    <AnimatedRoutes />
                </Router>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
