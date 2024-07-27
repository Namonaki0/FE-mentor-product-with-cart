import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button";
import { ButtonType } from "./../button.type.ts";
import { action } from "@storybook/addon-actions";

const defaultArgs: ButtonType = {
  currency: "GBP",
  id: "button",
  orderTotal: 200,
};
const { currency, id, orderTotal } = defaultArgs;

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    currency: {
      description: "The currency for the Button component.",
      control: "text",
      defaultValue: currency,
    },
    id: {
      description: "The id for the Button component.",
      control: "text",
      defaultValue: id,
    },
    orderTotal: {
      description: "The optional order Total for the Button component.",
      control: "number",
      defaultValue: orderTotal,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};