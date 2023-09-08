import { Meta, Story, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['other', 'register', 'delete'],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
    },
    label: {
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  args: {
    color: 'other',
    size: 'medium',
  },
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof meta>

export const OtherButton: story = {
  args: {
    color: 'other',
    size: 'medium',
  },
}
export const RegisterButton: story = {
  args: {
    color: 'register',
    size: 'medium',
  },
}
export const DeleteButton: story = {
  args: {
    color: 'delete',
    size: 'medium',
  },
}
