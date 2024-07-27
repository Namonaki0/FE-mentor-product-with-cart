import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button";
import { ButtonType } from "./../button.type";
import { action } from "@storybook/addon-actions";

const defaultArgs: ButtonType = {
  currency: "GBP",
  id: "button",
  price: 200,
  children: "Add to Cart",
};
const { currency, id, price } = defaultArgs;

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
    price: {
      description: "The optional order Total for the Button component.",
      control: "number",
      defaultValue: price,
    },
  },
};

export default Button;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};