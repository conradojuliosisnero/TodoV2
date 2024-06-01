import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import DarkModeToggle from "./ToggleDarkMode";

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Task" , path: '/dashboard'},
    { name: "About" , path: '/about'},
  ];

  return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">TodoApp v2</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/dashboard" aria-current="page">
              Task
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* LOGIN BUTTON  */}
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="hidden">
              Login
            </Link>
          </NavbarItem>
          {/* SIG UP BUTTON  */}
          <NavbarItem>
            <Button
              as={Link}
              className="hidden"
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
          {/* TOOGLE DARK MODE THEME  */}
          <DarkModeToggle />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
  );
}
