import type { Meta, StoryObj } from '@storybook/react'
 
import { createPassword } from './createPassword-form'
 
const meta = {
  title: 'Auth/createPassword',
  component: createPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof createPassword>
 
export default meta
type Story = StoryObj<typeof meta>
 
export const Primary: Story = {}