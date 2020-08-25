/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import { useState } from 'react'

const Profile = () => {
  const [state, setState] = useState(false)

  return (
    <article
      sx={{
        variant: 'layout.page-container',
      }}
    >
      <label htmlFor="#my-example">
        <input
          id="my-example"
          type="checkbox"
          checked={state}
          onChange={(e) => {
            setState(e.currentTarget.checked)
          }}
        />
        <span
          sx={{
            textDecoration: state ? 'line-through' : 'none',
          }}
        >
          My todo
        </span>
      </label>
    </article>
  )
}

export default Profile
