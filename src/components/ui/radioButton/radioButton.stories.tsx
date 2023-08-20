import type { Meta, StoryObj } from '@storybook/react'

import { radionButton } from '.'

const meta = {
  title: 'Components/RadioButton',
  component: radionButton,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof radionButton>

export default meta
type Story = StoryObj<typeof meta>

export const RadioButton: Story = {
  args: {
    checked: true,
  },
}
