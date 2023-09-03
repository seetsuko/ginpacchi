import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [ "search", "register", "delete" ]
    },
    large: {
      control: { type: "boolean" },
      options: [ true, false ],
    },
    label: {
      control: {type: "text"}
    }
  },
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta

type story = StoryObj<typeof meta>

export const SearchButton: story = {
  args: {
    variant: "search",
  }
}
export const RegisterButton: story = {
  args: {
    variant: "register"
  }
}
export const DeleteButton: story = {
  args: {
    variant: "delete"
  }
}