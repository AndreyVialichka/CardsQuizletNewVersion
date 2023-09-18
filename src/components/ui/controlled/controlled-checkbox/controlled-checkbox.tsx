import { useController, UseControllerProps } from 'react-hook-form'
 
import { Checkbox, CheckboxProps } from '../../checkbox/index'
 
export type ControlledCheckboxProps = UseControllerProps<any> &
  Omit<CheckboxProps, 'onChange' | 'value' | 'id'>
 
export const ControlledCheckbox = ({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })
  debugger
  return (
    <Checkbox
      {...{
        onCheckedChange : onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}