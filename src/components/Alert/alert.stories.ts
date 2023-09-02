import { Meta, StoryObj } from '@storybook/react'
import Alert from '.'

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'warning', 'error'],
    },
    noBorder: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    message: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof meta>

export const SuccessAlert: story = {
  args: {
    variant: 'success',
  },
}
export const WarningsAlert: story = {
  args: {
    variant: 'warning',
  },
}
export const ErrorAlert: story = {
  args: {
    variant: 'error',
  },
}
