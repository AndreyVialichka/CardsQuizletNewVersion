import type { Meta, StoryObj } from '@storybook/react'
 
import { checkEmailForm } from './checkEmail-form'
 
const meta = {
  title: 'Auth/checkEmail',
  component: checkEmailForm,
  tags: ['autodocs'],
} satisfies Meta<typeof checkEmailForm>
 
export default meta
type Story = StoryObj<typeof meta>
 
export const Primary: Story = {
  args: {
    email: 'your_email@domain.com',
  },
}