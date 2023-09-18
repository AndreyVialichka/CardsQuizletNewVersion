import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'

const loginSchema = z.object({
  email: z.string().email(),
})


type FormValues = {
  email: string
}
 
export const ForgotPasswordForm = () => {
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
        <Button type="submit">Submit</Button>
    </form>
  )
}
