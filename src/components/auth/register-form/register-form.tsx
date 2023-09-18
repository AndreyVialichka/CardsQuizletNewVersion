import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { ControlledCheckbox } from '../../ui'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  confirmPassword: z.string().min(3), 
  rememberMe: z.boolean().default(false),
}).superRefine(({confirmPassword,password}, ctx) => {
  if(confirmPassword !== password) {
    ctx.addIssue({
      code:'custom',
      message: 'the passwords did not match',
      path: ['confirmPassword']
    })
  }
})


type FormValues = {
  email: string
  password: string
  confirmPassword: string
  rememberMe: boolean
}
 
export const RegisterForm = () => {
    const { 
        control, 
        handleSubmit, 
        register,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
      })


  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  debugger
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
         <DevTool control={control} />
        <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
        <TextField {...register('password')} label={'password'} errorMessage={errors.password?.message} type='password'/>
        <TextField {...register('confirmPassword')} label={' Confirm password'} errorMessage={errors.confirmPassword?.message } type='password'/>
        <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'} />
        <Button type="submit">Submit</Button>
    </form>
  )
}
