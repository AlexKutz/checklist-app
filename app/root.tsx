import {Links, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react'
import './tailwind.css'
import Header from '~/components/Header'
import {json} from '@remix-run/node'

export const loader = async () => {
  return json({})
}

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="m-auto max-w-[1200px] px-12 pt-12">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
