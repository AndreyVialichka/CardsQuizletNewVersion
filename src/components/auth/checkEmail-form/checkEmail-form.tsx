
import { Email } from '../../../assets/index'
import { Button, Card, Typography } from '../../ui'

import s from './checkEmail.module.scss'

type Props = {
  email: string
}

export const checkEmailForm = ({ email }: Props) => {
  const message = `We've sent an e-mail with instructions to ${email}`

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Check your email
      </Typography>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography variant="body2" className={s.instructions}>
        {message}
      </Typography>
      <Button fullWidth as={'a'} href={'/sing-in'}>
        Back to Sign in
      </Button>
    </Card>
  )
}
