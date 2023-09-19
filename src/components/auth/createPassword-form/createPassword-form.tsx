import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'

const loginSchema = z.object({
  password: z.string().min(3),
})


type FormValues = {
  password: string
}
 
export const createPassword = () => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
         <DevTool control={control} />
        <TextField {...register('password')} label={'password'} errorMessage={errors.password?.message} type='password'/>
        <Button type="submit">Submit</Button>
    </form>
  )
}
