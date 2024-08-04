import {Burger} from '~/components/Burger'
import {Link} from '@remix-run/react'

export default function Header() {
  return (
    <header className="fixed top-0 z-20 flex h-12 w-full items-center justify-between gap-4 bg-indigo-300 p-6 text-amber-50">
      {/*<div className="color flex gap-3">*/}
      {/*  <Lens/>*/}
      {/*  <span>Search...</span>*/}
      {/*</div>*/}
      <nav>
        <ul className="flex gap-4 text-lg *:font-semibold">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/lists'}>My lists</Link>
          </li>
          <li>
            <Link to={'/create'}>Collection</Link>
          </li>
        </ul>
      </nav>
      <Burger />
    </header>
  )
}
