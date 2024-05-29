import { auth } from "@/edgedb";
import LeftSidebar from "@/components/shared/LeftSidebar";
// import RightSidebar from "@/components/shared/RightSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import { Link } from "lucide-react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = auth.getSession();

  const signedIn = await session.isSignedIn();

  return (
    <main className="background-light850_dark100 relative">
      {!signedIn ? (
        <>
          <div>please make sure you are signed in</div>
          <Link
            href={auth.getBuiltinUIUrl()}
            className="text-sm font-semibold leading-6 text-gray-800"
          >
            <button className="ring-primary bg-primarylight rounded-md px-4 py-2 ring-2 ring-inset">
              Sign in
            </button>
          </Link>
          <Link
            href={auth.getBuiltinUISignUpUrl()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <button className="bg-primary rounded-md px-4 py-2 text-white">
              Sign up
            </button>
          </Link>
        </>
      ) : (
        <>
          <Navbar />
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
