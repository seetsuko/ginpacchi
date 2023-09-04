import { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['searchInput', 'textInput', 'contactTextarea', 'memoTextarea'],
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof meta>

export const SearchInput: story = {
  args: {
    variant: 'searchInput',
  },
}
export const TextInput: story = {
  args: {
    variant: 'textInput',
  },
}
export const ContactTextarea: story = {
  args: {
    variant: 'contactTextarea',
  },
}
export const MemoTextarea: story = {
  args: {
    variant: 'memoTextarea',
  },
}
