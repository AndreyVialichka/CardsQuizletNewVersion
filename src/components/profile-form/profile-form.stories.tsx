import type { Meta, StoryObj } from '@storybook/react'
 
import { Profile } from './profile-form'
 
const meta = {
  title: 'Auth/profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>
 
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'your_email@domain.com',
    name: 'John Doe',
    onAvatarChange: () => {
      console.info('avatar changed')
    },
    onNameChange: () => {
      console.info('name changed')
    },
    onLogout: () => {
      console.info('logout')
    },
  },
}
