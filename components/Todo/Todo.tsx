/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'
import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Trash2, Check as Tick } from 'react-feather'

import { Check } from './Check'
import { Description } from './Description'
import { TodoData } from '../../lib/types'

type TodoProps = Omit<TodoData, 'userId'> &
  React.InputHTMLAttributes<HTMLInputElement> &
  SxProps

export const Todo: React.FC<TodoProps> = ({
  completed,
  created,
  description,
  id,
  onChange,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const background = useTransform(x, [100, -100], ['#ff6b6b', '#63e6be'])
  const scaleTrash = useTransform(x, [0, 200], [0, 1])
  const scaleTick = useTransform(x, [0, -200], [0, 1])

  return (
    <motion.div
      sx={{
        variant: 'forms.todo-root',
      }}
      ref={rootRef}
      style={{
        background,
      }}
    >
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          p: 3,
        }}
      >
        <motion.div
          style={{
            scale: scaleTrash,
            originY: '50%',
            originX: '50%',
          }}
        >
          <Trash2 size={24} color="#fff" />
        </motion.div>
        <motion.div
          style={{
            scale: scaleTick,
            originY: '50%',
            originX: '50%',
          }}
        >
          <Tick size={24} color="#fff" />
        </motion.div>
      </div>
      <motion.label
        htmlFor={id}
        sx={{
          variant: 'forms.todo-label',
          bg: 'white',
        }}
        drag="x"
        dragConstraints={rootRef}
        dragElastic={1}
        style={{
          x,
        }}
      >
        <input
          {...props}
          type="checkbox"
          id={id}
          name={id}
          onChange={onChange}
          checked={completed}
          sx={{
            variant: 'forms.todo-input',
          }}
        />
        <Check completed={completed} />
        <div
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
            ml: 3,
          }}
        >
          <Description completed={completed}>{description}</Description>
          <span
            sx={{
              variant: 'text.caption',
              color: 'gray',
            }}
          >
            {created}
          </span>
        </div>
      </motion.label>
    </motion.div>
  )
}
