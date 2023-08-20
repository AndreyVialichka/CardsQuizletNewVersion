import * as Checkbox from '@radix-ui/react-checkbox'

import s from './radionButton.module.scss'

export type radionButtonProps = {
  checked?: boolean
  className?: string
}

export const radionButton = (props: radionButtonProps) => {
  const { checked, className = 'default' } = props

  return (
    <form>
      <div className={s[className]}>
        <Checkbox.Root className={s.CheckboxRoot} checked={checked} id="c1">
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <div className={s.innerCircle}></div>
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  )
}
