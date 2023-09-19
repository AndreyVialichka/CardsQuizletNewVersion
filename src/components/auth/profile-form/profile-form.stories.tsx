import type { Meta, StoryObj } from '@storybook/react'
 
import { profile } from './profile-form'
 
const meta = {
  title: 'Auth/profile',
  component: profile,
  tags: ['autodocs'],
} satisfies Meta<typeof profile>
 
export default meta
type Story = StoryObj<typeof meta>
 
export const Primary: Story = {}