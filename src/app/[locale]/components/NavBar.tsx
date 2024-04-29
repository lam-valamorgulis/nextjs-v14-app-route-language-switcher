import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
import { Container, Flex, Link } from "@radix-ui/themes";
import AuthStatus from "./AuthStatus";
import LocaleSwitcher from "@/src/app/[locale]/components/LocaleSwitcher";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex
          justify="between"
          className="flex-col sm:flex-row text-center align-middle"
        >
          <Flex
            align="center"
            gap="3"
            className="flex-col sm:flex-row text-center"
          >
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={150}
                height={150}
                alt="github/lam-valamorgulis"
              />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
          <LocaleSwitcher />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const t = useTranslations("Navigation");

  // ??? href props can't be a string !!! can't make a loop
  // const links = [
  //   { label: t("home"), href: "/" },
  //   { label: t("allEmployees"), href: "/employees/list" },
  //   { label: t("detailEmployee"), href: "/employees/detail" },
  //   { label: t("createEmployee"), href: "/employees/create" },
  // ];

  return (
    <ul className="flex flex-col text-left sm:flex-row sm:space-x-5 pl-5">
      <NavigationLink href="/"> {t("home")}</NavigationLink>
      <NavigationLink href="/employees/list">
        {t("allEmployees")}
      </NavigationLink>
      <NavigationLink href="/employees/detail">
        {t("detailEmployee")}
      </NavigationLink>
      <NavigationLink href="/employees/create">
        {t("createEmployee")}
      </NavigationLink>
    </ul>
  );
};

export default NavBar;
