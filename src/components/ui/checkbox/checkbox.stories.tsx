import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from '.'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxDemo,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CheckboxDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    checked: true,
  },
}
