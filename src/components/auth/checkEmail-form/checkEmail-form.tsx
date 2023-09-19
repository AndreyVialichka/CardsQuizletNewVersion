
import { Button } from '../../ui/button'


 
export const checkEmailForm = () => {


  const onSubmit = (e:any) => {
    e.preventDefault
    console.log()
  }

  debugger
  return (
    <form onSubmit={onSubmit}>
        <Button type="submit">Submit</Button>
    </form>
  )
}
