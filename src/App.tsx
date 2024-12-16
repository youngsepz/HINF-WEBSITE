import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { NavigationBar } from './navbar'
import { ThemeProvider, useTheme } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { SideSheet } from './sidepopper'
import UvicLogo from './assets/uvic-logo.svg'
import UvicLogoDark from './assets/uvic-logo-dark.svg'
import Hero from './Hero'

function App() {
    const { theme } = useTheme()
    let iconimage
    switch (theme) {
        case 'light':
            iconimage = './assets/uvic-logo.svg'
            break
        case 'dark':
            iconimage = './assets/uvic-logo-dark.svg'
            break
    }

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="wrapper sticky py-3 z-40">
                <div className="flex md:flex-row justify-between items-center max-w-7xl w-100 m-auto md:show max-xl:px-7">
                    <div className="logo flex justify-center items-center text-xl ">
                        <img
                            className="logo h-8 w-16"
                            src={iconimage}
                            alt="Health Information Science"
                        ></img>
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
            <Hero />
        </ThemeProvider>
    )
}

export default App
