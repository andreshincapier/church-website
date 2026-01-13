import React, { ReactNode, useEffect, useRef } from 'react'
import { CircularProgress, CircularProgressProps, LinearProgress } from '@mui/material'
import styles from './loader.module.scss'
import clsx from 'clsx'

export interface LoaderProps {
  children?: ReactNode
  direction?: 'column' | 'row'
  grid?: boolean
  wrapperStyle?: React.CSSProperties
  wrapperClassName?: string
  linear?: boolean
}

export const Loader = (props: LoaderProps & CircularProgressProps) => {
  const {
    direction = 'column',
    variant = 'indeterminate',
    value,
    grid,
    wrapperStyle = {},
    wrapperClassName,
    linear = false,
    ...rest
  } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--root_q884nrA-posintion', direction)
    }
  }, [direction])

  return (
    <div
      ref={ref}
      className={clsx(styles.root_q884nrA, grid ? styles.grid : styles.flex, wrapperClassName)}
      style={wrapperStyle}
    >
      {linear && <LinearProgress variant="indeterminate" sx={{ width: '100%' }} />}
      {!linear && <CircularProgress variant={variant} value={value} {...rest} />}
      {props.children}
    </div>
  )
}

export default Loader