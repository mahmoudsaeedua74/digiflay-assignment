"use client";
import React, { useState } from "react";
import logo from "@/assets/imgs/logo.png";
import countryEg from "@/assets/imgs/egypt.png";
import countryUK from "@/assets/imgs/kingdom.png";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export default function Navbar() {
  // for open menu and close it when the Screens on mobile
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const t = useTranslations("Navbar");
  const local = useLocale();
  //i use pathname for make active and i see where the user go so i can change active for every linek
  const pathName = usePathname();
  return (
    <nav className="font-semibold">
      <div className="container flex flex-wrap items-center justify-between  pt-2  gap-8  ">
        <div className="pe-10">
          <Image
            src={logo}
            width={76}
            height={56}
            alt="this image for the logo"
          />
        </div>
        <ul className="md:gap-2 lg:gap-6 xl:gap-8 flex-grow hidden md:flex cursor-pointer ">
          <li
            className={`px-4 ${
              pathName === "ar" || "en" ? "text-mainColor" : ""
            }`}
          >
            <Link href="/">{t("home")}</Link>
          </li>
          <li
            className={`navLink ${
              pathName === "/categories" ? "text-mainColor" : ""
            }`}
          >
            <Link href="/">{t("Categories")}</Link>
          </li>
          <li
            className={`navLink ${
              pathName === "/contact" ? "text-mainColor" : ""
            }`}
          >
            <Link href="/"> {t("Contact us")}</Link>
          </li>
          <li
            className={`navLink ${
              pathName === "/about" ? "text-mainColor" : ""
            }`}
          >
            <Link href="/">{t("About")}</Link>
          </li>
        </ul>

        <div className="ps-10  hidden md:block">
          <Link href={`/${local === "ar" ? "en" : "ar"}`} className={`flex`}>
            <span className={"me-2 "}>{t("language")}</span>
            <Image
              src={local === "ar" ? countryUK : countryEg}
              width={20}
              height={20}
              alt="Egypt Flag"
              className="rounded-full size-5"
            />
          </Link>
        </div>
        <button
          className="me-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <VscMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden  w-[90%] mx-auto ">
          <ul className="flex flex-col items-center space-y-3 py-4 cursor-pointer ">
            <li
              onClick={() => setIsMenuOpen(false)}
              className="navLink"
            >
              {t("home")}
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="navLink"
            >
              {t("Categories")}
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="navLink"
            >
              {t("Contact us")}
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="navLink"
            >
              {t("About")}
            </li>
            <li onClick={() => setIsMenuOpen(false)} className="px-4 ">
              <Link
                href={`/${local === "ar" ? "en" : "ar"}`}
                className={`flex`}
              >
                <span className={"me-2 "}>{t("language")}</span>
                <Image
                  src={local === "ar" ? countryUK : countryEg}
                  width={20}
                  height={20}
                  alt="Egypt Flag"
                  className="rounded-full size-5"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
