import {Outlet} from '@remix-run/react'

export const lists = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default lists
