import { auth } from "@/edgedb";
import Link from "next/link";

export default async function Home() {
  const session = auth.getSession();

  const signedIn = await session.isSignedIn();

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 justify-end space-x-2">
            {!signedIn ? (
              <>
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
              </>
            ) : (
              <Link
                href="home"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <button className="rounded-md bg-primary-500 px-4 py-2 text-white">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Project Socio
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Welcome to the Project Socio application. This application helps
              you and your organization achive your goal by making it addictive.
              It includes a basic logic to help you monitor, collaborate and
              also attach social benefits to you project workspace. The
              navigation ui is very simple with little overhead.
              <br />
              Click the sign in button now if you have not registered or signup
              if you have not.
              <br />
              Already registered, get started here.
              <br />
            </p>
            <Link
              href="/home"
              className="text-sm font-semibold leading-6 text-gray-800"
            >
              <button className="rounded-md bg-primary-100 px-4 py-2 ring-2 ring-inset ring-primary-500">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-2xl pt-4 sm:pt-8 lg:pt-12"></div>
      </div>
    </div>
  );
}
