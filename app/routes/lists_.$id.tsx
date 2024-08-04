import {Form} from '@remix-run/react'
import {ChangeEventHandler, useCallback, useState} from 'react'
import {produce} from 'immer'
import Add from '~/components/icons/Add'

function debounce<A extends any[]>(
  callback: (...args: A) => void,
  wait: number = 300
): (...args: A) => void {
  let timeout: NodeJS.Timeout

  return (...args: A) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

const initialList = [
  {
    id: '1722592781796',
    tasks: [
      {
        id: '1722592938847',
        title: 'Сделать что нибудь',
        description: 'Just do it make your dreams come true',
        completed: false,
        subtasks: [],
        priority: 1,
        tags: [],
      },
      {
        id: '1722592979559',
        title: 'Сделать что нибудь еще',
        description: 'Do something else.',
        completed: true,
        subtasks: [],
        priority: 1,
        tags: [],
      },
    ],
  },
  {
    id: '1722592795630',
    title: 'Група 1',
    tasks: [
      {
        id: '1722592973990',
        title: 'Сделать что нибудь',
        description: 'Just do it make your dreams come true',
        completed: false,
        subtasks: [],
        priority: 1,
        tags: [],
      },
      {
        id: '1722592966813',
        title: 'Сделать что нибудь еще',
        description: 'Do something else.',
        completed: true,
        subtasks: [],
        priority: 1,
        tags: [],
      },
      {
        id: '1722595083533',
        title: 'Сделать что нибудь еще',
        description: 'Do something else.',
        completed: true,
        subtasks: [],
        priority: 1,
        tags: [],
      },
    ],
  },
]

export const create = () => {
  const [list, setList] = useState(initialList)

  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const setCheckbox = useCallback(
    (group: number, item: number, isCompleted: boolean) => {
      setList(
        produce((draft) => {
          draft[group].tasks[item].completed = isCompleted
        })
      )
    },
    []
  )

  const groupsComplete = list.map((group) => {
    return (
      group.tasks.reduce((count, task) => count + +task.completed, 0) /
      group.tasks.length
    )
  })

  const textAreaAdjust = debounce((e) => {
    e.target.style.height = '1px'
    e.target.style.height = 25 + e.target.scrollHeight + 'px'
  })

  return (
    <div className="m-auto mt-6">
      <Form className="flex flex-col items-start">
        <div className="w-full">
          <input
            className="w-full text-3xl font-bold text-black placeholder:text-gray-500 focus:outline-none focus:placeholder:text-transparent"
            id="title"
            type="text"
            placeholder="Name"
            value={title}
            onBlur={() => setTitle(title.trim())}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-3 w-full">
          <textarea
            className="text-md min-h-fit w-full resize-none overflow-hidden font-semibold text-black placeholder:text-gray-500 focus:outline-none focus:placeholder:text-transparent"
            id="description"
            placeholder="Description"
            rows={1}
            value={description}
            onKeyUp={textAreaAdjust}
            onBlur={() => setDescription(description.trim())}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="relative my-5 flex items-center rounded-md bg-indigo-100 align-middle font-semibold text-gray-600">
          <input
            className="peer relative hidden"
            type="checkbox"
            id="private"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
            aria-label="Toggle private"
          />
          <button
            className="relative z-10 h-full w-20 px-4 py-2 text-white transition-colors peer-checked:text-gray-600"
            onClick={() => setIsPrivate(false)}
          >
            Public
          </button>
          <button
            className="relative z-10 h-full w-[5.5rem] px-4 py-2 transition-colors peer-checked:text-white"
            onClick={() => setIsPrivate(true)}
          >
            Private
          </button>
          <span className="absolute left-0 h-full w-[5.2rem] scale-[85%] scale-y-75 rounded-md bg-indigo-700 transition-[left] peer-checked:left-20 peer-checked:w-[5.5rem]"></span>
        </div>
        <hr className="my-5 h-1 w-full bg-indigo-700" />
        <button className="rounded border-2 border-gray-400 px-6 py-1.5 text-2xl font-bold text-gray-500">
          <Add />
        </button>
        {list.map((group, groupIndex) => {
          const groupComplete = (100 * groupsComplete[groupIndex]).toFixed()
          return (
            <div className="w-full" key={group.id}>
              {group.title ? (
                <div className="mt-5 flex items-center gap-4">
                  <h1 className="text-2xl font-bold uppercase">
                    {group.title}
                  </h1>
                  <div className="relative flex h-5 w-32 translate-y-[1px] items-center justify-center border-2 border-indigo-300 text-center">
                    <span className="relative z-10 text-sm font-semibold">
                      {groupComplete + ' %'}
                    </span>
                    <div
                      style={{width: groupComplete + '%'}}
                      className="absolute left-0 h-full bg-indigo-300"
                    ></div>
                  </div>
                </div>
              ) : (
                ''
              )}
              {group.tasks.map((task, TaskIndex) => (
                <Task
                  key={task.id}
                  isChecked={task.completed}
                  text={task.title}
                  description={task.description}
                  onChange={(e) =>
                    setCheckbox(groupIndex, TaskIndex, e.target.checked)
                  }
                />
              ))}
            </div>
          )
        })}
      </Form>
    </div>
  )
}

interface ITask {
  isChecked: boolean
  text: string
  description?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

function Task({isChecked, text, description, onChange}: ITask) {
  return (
    <div className="mt-3 w-full rounded-md bg-gray-100 p-2">
      <div className="flex items-center gap-4">
        <input
          checked={isChecked}
          className="h-5 w-5"
          type="checkbox"
          onChange={onChange}
        />
        <span>{text}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default create
