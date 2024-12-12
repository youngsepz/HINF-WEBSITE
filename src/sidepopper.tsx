import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from './components/ui/menu'

export function SideSheet() {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>

            <SheetContent className="flex flex-col align-middle">
                <SheetHeader className="text-warning-foreground">
                    <SheetTitle>Faculty and Staff</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle>Faculty and Staff</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle>Faculty and Staff</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle>Faculty and Staff</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
