"use client";

// import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Navbar = ({
  onSignOut,
}: {
  signedIn: boolean;
  onSignOut: () => Promise<void>;
}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await onSignOut();

    router.push("/");
  };

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Project <span className="text-primary-500">Socio</span>
        </p>
      </Link>

      <GlobalSearch />

      <Theme />

      {/* <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }}
          />
        </SignedIn> */}

      <MobileNav />
    </nav>
  );
};

export default Navbar;
