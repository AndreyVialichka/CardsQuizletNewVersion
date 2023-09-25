import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { Card, ControlledCheckbox, Typography } from '../../ui'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(true),
})


type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

type propsType = {
  onSubmit:(data:FormValues) => void
}
 
export const LoginForm = ({
  onSubmit
}:propsType) => {
    const { 
        control, 
        handleSubmit, 
        register,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
      })


  const onSubmitHandler = (data: FormValues) => {  
    onSubmit(data)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DevTool control={control} />
        <Typography variant='h1'>Sign In</Typography>
        <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
        <TextField {...register('password')} label={'password'} errorMessage={errors.password?.message} type='password'/>
        <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'}/>
        <Typography variant="link1" as="a" href="google.com" textPosition='right' >Forgot Password</Typography>
        <Button variant="primary" type="submit" fullWidth  >Sign In</Button>
        
      </form>
      <Typography variant='body2'>{`Don't have account`}</Typography>
      <Typography variant="link1" as="a" href="google.com">Sign Up</Typography>
    </Card>
  )
}
