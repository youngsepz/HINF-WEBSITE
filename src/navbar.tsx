import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { UserIcon } from "./components/ui/user";
import { IdCardIcon } from "./components/ui/id-card";

export function NavigationBar() {
  return (
    <NavigationMenu className="text-slate-900 dark:text-slate-100">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our People</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_.75fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/staff"
                    >
                      <UserIcon />
                      <div className="mb-2 mt-2 text-lg font-medium">
                        Faculty & Staff
                      </div>

                      <p className="lg:h-[70px] text-sm leading-tight text-muted-foreground">
                        Our faculty and staff that contribute to school.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="">
                      <IdCardIcon />
                    </div>

                    <div className="mb-2 mt-[1px] text-lg font-medium">
                      Researchers
                    </div>
                    <p className="lg:h-[70px] text-sm leading-tight text-muted-foreground">
                      Our researchers in the Digital Health Innovation Lab
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Undergraduates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Graduates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Research</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
