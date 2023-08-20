import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { className = 'default', as: Component = 'div', ...rest } = props

  return <Component className={`${s[className]}`} {...rest} />
}
