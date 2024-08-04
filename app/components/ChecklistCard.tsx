import Star from '~/components/icons/Star'
import Pen from '~/components/icons/Pen'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  title: string
  description?: string
  author: string
  stars: string
}

export const ChecklistCard = () => {
  return (
    <div className="flex min-h-40 flex-col overflow-hidden rounded-lg bg-gray-200 shadow-md">
      <div className="relative w-full bg-teal-200 pb-[55%]">
        <img
          className="absolute inset-x-0 inset-y-0 h-full w-full object-cover"
          src="https://picsum.photos/400/200"
          alt={''}
        />
      </div>
      <div className="flex flex-col items-start gap-3.5 p-3.5">
        <h2 className="text-lg font-semibold">
          Web development. Before deploy
        </h2>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 rounded-lg bg-amber-500 px-2 py-0.5 font-semibold text-amber-50">
            <Star />
            <span>13</span>
          </div>
          <span className="flex items-center gap-1 rounded-lg bg-cyan-600 px-2 text-amber-50">
            <Pen />
            Author
          </span>
        </div>
        <h3 className="text-sm text-gray-800">
          Description Use to describe checklist Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corporis, dolores.
        </h3>
      </div>
    </div>
  )
}
