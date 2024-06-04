import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useAuth } from "../../auth/auth";

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const auth = useAuth();

  const menuItems = [
    { name: "Home", path: "/",auth: true },
    { name: "Dashboard", path: "/dashboard", auth: auth.isAuthenticated },
    { name: "Settings", path: "/settings", auth: auth.isAuthenticated },
    { name: "About", path: "/about",auth: true },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">TodoApp v2</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          {auth.isAuthenticated && (
            <Link href="/dashboard" aria-current="page">
              Dashboard
            </Link>
          )}
        </NavbarItem>
        <NavbarItem isActive>
          {auth.isAuthenticated && (
            <Link href="/settings" aria-current="page">
              Settings
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {auth.isAuthenticated ? (
            ""
          ) : (
            <Button as={Link} color="primary" href="/login" variant="flat">
              Log in
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          {auth.isAuthenticated ? (
            ""
          ) : (
            <Button as={Link} color="secondary" href="/register" variant="flat">
              Sign Up
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${item.auth ? "" : "hidden"}`}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "warning"
                  : "foreground"
              }
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <ToggleDarkMode />
    </Navbar>
  );
}
