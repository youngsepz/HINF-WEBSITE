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

export function NavigationBar() {
    return (
        <NavigationMenu
            className="flex h-14 items-center px-4"
            orientation="horizontal"
        >
            <NavigationMenuList>
                <NavigationMenuItem className="hover:bg-sky-700 hover:clr text-white-500 rounded-full">
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hover:bg-sky-700 hover:clr text-white-500 rounded-full">
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hover:bg-sky-700 hover:clr text-white-500 rounded-full">
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-1 grid-flow-col">
                            <li className="w-400 h-400"></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hover:bg-sky-700 hover:clr text-white-500 rounded-full">
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

export default NavigationBar
