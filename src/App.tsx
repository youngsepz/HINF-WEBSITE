import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { NavigationBar } from './navbar'
import { ThemeProvider, useTheme } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { SideSheet } from './sidepopper'
import UvicLogo from './assets/uvic-logo.svg'
import UvicLogoDark from './assets/uvic-logo-dark.svg'
import { BentoGridSecondDemo } from './bento'

function App() {
    const { theme } = useTheme()
    console.log(theme)

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="wrapper sticky py-3">
                <div className="flex md:flex-row justify-between items-center max-w-7xl w-100 m-auto md:show max-xl:px-7">
                    <div className="logo flex justify-center items-center text-xl ">
                        <img className="logo h-8 w-16" src={UvicLogoDark}></img>
                    </div>
                    <div className="flex">
                        <div className="max-md:hidden">
                            <NavigationBar />
                        </div>
                        <div className="max-md:px-2 px-1">
                            <ModeToggle />
                        </div>

                        <div className="md:hidden">
                            <SideSheet />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <BentoGridSecondDemo />
            </div>
        </ThemeProvider>
    )
}

export default App
