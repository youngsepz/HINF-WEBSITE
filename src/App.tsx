import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { NavigationBar } from './navbar'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { SideSheet } from './sidepopper'
import UvicLogo from './assets/uvic-logo.svg'
import UvicLogoDark from './assets/uvic-logo-dark.svg'

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="wrapper sticky border-b-[1px] py-3">
                <div className="flex md:flex-row flex-col justify-between items-center max-w-7xl w-100 m-auto md:show max-xl:px-7">
                    <div className="logo flex justify-center items-center text-xl ">
                        <img className="logo h-8 w-16" src={UvicLogoDark}></img>
                    </div>
                    <div className="flex">
                        <NavigationBar />
                        <div className="px-1">
                            <ModeToggle />
                            <SideSheet />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
