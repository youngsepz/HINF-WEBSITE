'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Mockup, MockupFrame } from '@/components/ui/mockup'
import Glow from '@/components/ui/glow'
import { useTheme } from 'next-themes'
import Github from '@/components/logos/github'

export default function Hero() {
    const { resolvedTheme } = useTheme()
    let src

    switch (resolvedTheme) {
        case 'light':
            src = '/app-light.png'
            break
        case 'dark':
            src = '/app-dark.png'
            break
        default:
            src = '/app-dark.png'
            break
    }

    return (
        <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
            <div className="mx-auto flex max-w-container flex-col gap-12 pt-0 sm:gap-24">
                <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
                    <Badge variant="outline" className="animate-appear">
                        <a href="/" className="flex items-center gap-1">
                            University of Victoria
                            <ArrowRightIcon className="h-3 w-3" />
                        </a>
                    </Badge>
                    <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
                        Health Information Science
                    </h1>
                    <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
                        Landing page components built with React, Shadcn/ui and
                        Tailwind that will make your website feel premium.
                    </p>
                    <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
                        <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
                            <Button variant="default" size="lg" asChild>
                                <a href="/">Get Started</a>
                            </Button>
                            <Button variant="glow" size="lg" asChild>
                                <a href="/">
                                    <Github className="mr-2 h-4 w-4" /> Github
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative pt-12">
                        <MockupFrame
                            className="animate-appear opacity-0 delay-700"
                            size="small"
                        >
                            <Mockup type="responsive"></Mockup>
                        </MockupFrame>
                        <Glow
                            variant="top"
                            className="animate-appear-zoom opacity-0 delay-1000"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
