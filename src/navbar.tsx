import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import uviclogo from './assets/uvic-logo.svg'
import { ModeToggle } from './components/mode-toggle'

export function NavigationBar() {
    return (
        <NavigationMenu
            className="flex h-14 items-center px-4 border-b-[1px]"
            orientation="horizontal"
        >
            <ModeToggle></ModeToggle>
            <img className="w-24 h-24" src={uviclogo} alt="UVIC LOGO"></img>
            <NavigationMenuList>
                <NavigationMenuItem class="navmenuitem">
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
