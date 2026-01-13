import React, { ReactNode } from 'react'
import Loader from './ loader'
import styles from './fullScreenLoader.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
  linear?: boolean
  children?: ReactNode
}
export const FullScreenLoader: React.FC<Props> = ({ className, children, linear }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Loader size="5em" thickness={4.5} linear={linear}>
        {children}
      </Loader>
    </div>
  )
}

export default FullScreenLoader