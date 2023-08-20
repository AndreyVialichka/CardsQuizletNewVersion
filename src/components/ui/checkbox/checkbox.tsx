import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckBoxProps = {
  checked?: boolean
  className?: string
}

export const CheckboxDemo = (props: CheckBoxProps) => {
  const { checked, className = 'default' } = props

  return (
    <form>
      <div className={s[className]}>
        <Checkbox.Root className={s.CheckboxRoot} checked={checked} id="c1">
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  )
}
