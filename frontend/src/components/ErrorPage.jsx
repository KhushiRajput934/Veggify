import React from 'react'

const ErrorPage = () => {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base landing-7 tracking-tight text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
    </main>
  )
}

export default ErrorPage