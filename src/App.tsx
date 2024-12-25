import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { NavigationBar } from './navbar'
import { ThemeProvider, useTheme } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { SideSheet } from './sidepopper'
import Hero from './Hero'
import { Testing } from './Test'
import { TimelineDemo } from './Timeline'
import { Footer } from './footer'

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="wrapper sticky py-3 z-40">
                <div className="flex md:flex-row justify-between items-center max-w-7xl w-100 m-auto md:show max-xl:px-7">
                    <div className="logo flex justify-center items-center text-xl ">
                        <div className="font-semibold dark:text-slate-100 text-slate-600">
                            <a href="/">Health Information Science</a>
                        </div>
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

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero /> <Testing /> <Hero />
                        </>
                    }
                />
                <Route
                    path="/history"
                    element={
                        <>
                            <TimelineDemo />
                        </>
                    }
                />
                <Route path="/apples" element={<ModeToggle />} />
            </Routes>

            <Footer />
        </ThemeProvider>
    )
}

export default App
