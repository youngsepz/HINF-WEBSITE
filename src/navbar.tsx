import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
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
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_.75fr] !text-blue-900">
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
          <NavigationMenuTrigger className="data-[state=open]:text-blue-700 [data-state=open]:border-blue-700 [data-state=open]:border-2 relative hover:text-blue-600 tracking-wider bg-blue-600 text-white font-bold w-32 mr-6 text-center shadow-lg">
            Programs
          </NavigationMenuTrigger>
         
          <NavigationMenuContent className="border">
          <NavigationMenuLink className="">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_.75fr] dark:text-slate-200 text-blue-900 ">
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <a
                      className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/staff"
                    >
                      <UserIcon />
                      <div className="mb-2 mt-2 text-lg font-medium font-bold dark:text-white">
                        Undergraduate
                      </div>

                      <p className="lg:h-[90px] text-sm leading-tight text-muted-foreground">
                        Learn about our Undergraduate programs. Such as our BSc in Health Information Science or our combined program with Computer Science.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <a className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="">
                      <IdCardIcon />
                    </div>

                    <div className="mb-2 mt-[1px] text-lg font-medium font-bold">
                      Graduate
                    </div>
                    <p className="lg:h-[70px] text-sm leading-tight text-muted-foreground">
                      Learn about four graduate programs. PhD, Masters, Masters in Nursing Combined and Certificate Programs.
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
