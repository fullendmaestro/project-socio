import { redirect } from "next/navigation";
import { auth } from "@/edgedb";
import LeftSidebar from "@/components/shared/LeftSidebar";
// import RightSidebar from "@/components/shared/RightSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Link from "next/link";

const handleSignOut = async () => {
  "use server";

  const { signout } = auth.createServerActions();
  await signout();
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = auth.getSession();

  const signedIn = await session.isSignedIn();

  // if (!signedIn) {
  //   redirect(auth.getBuiltinUIUrl());
  // }

  return (
    <main className="background-light850_dark100 relative">
      {!signedIn ? (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex flex-1 justify-end space-x-2">
                <Link
                  href={auth.getBuiltinUIUrl()}
                  className="text-sm font-semibold leading-6 text-gray-800"
                >
                  <button className="rounded-md bg-primary-100 px-4 py-2 ring-2 ring-inset ring-primary-500">
                    Sign in
                  </button>
                </Link>
                <Link
                  href={auth.getBuiltinUISignUpUrl()}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <button className="rounded-md bg-primary-500 px-4 py-2 text-white">
                    Sign up
                  </button>
                </Link>
              </div>
            </nav>
          </header>

          <div className="relative isolate px-6 py-14 lg:px-8">
            <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-32">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Unauthenticated Access
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Please make sure you are loged in
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar signedIn={signedIn} onSignOut={handleSignOut} />
          <div className="flex">
            <LeftSidebar />
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
              <div className="mx-auto w-full max-w-5xl">{children}</div>
            </section>
            {/* <RightSidebar /> */}
          </div>
          Toaster
        </>
      )}
    </main>
  );
};

export default Layout;
