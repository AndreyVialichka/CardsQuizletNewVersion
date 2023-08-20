import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'error', 'disabled'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Textarea: Story = {
  args: {
    variant: 'default',
    disabled: false,
  },
}
