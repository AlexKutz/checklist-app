import type {MetaFunction} from '@remix-run/node'
import {ChecklistCard} from '~/components/ChecklistCard'
import {Link} from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    {title: 'ChecklistApp'},
    {name: 'description', content: 'Browse checklists or create your own.'},
  ]
}

export default function Index() {
  return (
    <>
      <h1 className="mt-16 scroll-m-20 px-4 text-3xl font-semibold tracking-tight">
        Explore ready-made checklists <br /> or
        <Link to="#" className="text-sky-700">
          {' '}
          <span className="underline">create your own</span>
        </Link>
      </h1>
      <div className="grid gap-10 p-4 pt-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(10)].map((_, index) => (
          <ChecklistCard key={index} />
        ))}
      </div>
    </>
  )
}
