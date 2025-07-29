import React from 'react'
import styles from './Button.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <button className={styles.btn} {...rest}>{children}</button>
}
