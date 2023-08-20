import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '.'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'link1',
        'link2',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'body1',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h2',
    as: 'h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'h2',
    as: 'h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'h3',
    as: 'h3',
  },
}

export const Aslink1: Story = {
  args: {
    variant: 'link1',
    children: 'link1',
    as: 'a',
  },
}
export const Aslink2: Story = {
  args: {
    variant: 'link2',
    children: 'link2',
    as: 'a',
  },
}
