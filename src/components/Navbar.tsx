"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
// import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="font-bold">Arjun Singh Gurjar</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Link href="#projects" className={navigationMenuTriggerStyle()}>
              Projects
            </Link>
            <Link href="#education" className={navigationMenuTriggerStyle()}>
              Education
            </Link>
            <Link href="#skills" className={navigationMenuTriggerStyle()}>
              Skills
            </Link>
            <Button asChild variant="ghost">
              <Link href="#contact">Contact</Link>
            </Button>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}