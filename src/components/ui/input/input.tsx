import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'default' | 'active' | 'error' | 'hover' | 'focus' | 'disabled'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const { variant = 'default', as: Component = 'input', ...rest } = props

  return <Component className={`${s[variant]}  `} {...rest} disabled={variant === 'disabled'} />
}
