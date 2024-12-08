import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { NavigationBar } from './navbar'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import UvicLogo from './assets/uvic-logo.svg'
import UvicLogoDark from './assets/uvic-logo-dark.svg'

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="wrapper border-b-[1px] py-3">
                <div className="flex justify-between items-center max-w-7xl w-100 m-auto md:show max-xl:px-6">
                    <div className="logo flex justify-center items-center text-xl">
                        <img className="logo h-8 w-16" src={UvicLogoDark}></img>
                        <div className="px-4">Health Information Science</div>
                    </div>
                    <div className="flex">
                        <NavigationBar />
                        <div className="px-1">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
