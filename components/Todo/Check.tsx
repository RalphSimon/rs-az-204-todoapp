/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import {
  motion,
  SVGMotionProps,
  Variants,
  useMotionValue,
  useTransform,
} from 'framer-motion'

type Props = {
  completed?: boolean
} & SVGMotionProps<SVGElement>

const svgMotion: Variants = {
  checked: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  unchecked: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
}

const pathMotion: Variants = {
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
}

const circleMotion: Variants = {
  checked: {
    scale: 1,
  },
  unchecked: {
    scale: 0,
  },
}

export const Check: React.FC<Props> = ({ completed }) => {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <motion.svg
      initial={false}
      animate={completed ? 'checked' : 'unchecked'}
      width={48}
      height={48}
      fill="none"
      variants={svgMotion}
    >
      <motion.circle
        cx={24}
        cy={24}
        r={22.5}
        strokeWidth={3}
        sx={{
          stroke: 'violet-1',
        }}
        style={{
          opacity: completed ? 0 : 1,
          originX: '50%',
          originY: '50%',
        }}
      />
      <motion.circle
        cx={24}
        cy={24}
        r={24}
        sx={{
          fill: 'primary',
        }}
        variants={circleMotion}
        style={{
          originX: '50%',
          originY: '50%',
        }}
      />
      <motion.path
        d="M12 23.314L20.66 32 39 13"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0 1"
        variants={pathMotion}
        style={{
          pathLength,
          opacity,
        }}
        sx={{
          stroke: 'teal-3',
        }}
      />
    </motion.svg>
  )
}
