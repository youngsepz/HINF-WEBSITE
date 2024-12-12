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
 
            <SheetContent className="flex flex-col pt-16 text-lg">
                <SheetHeader>
                    <SheetTitle className="text-3xl">Our People</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle className="text-3xl">Undergraduates</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle className="text-3xl">Graduates</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <SheetHeader className="h1">
                    <SheetTitle className="text-3xl">Research</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
