import type { Meta, StoryObj } from "@storybook/react";
import ProductDisplay from "../productDisplay";
import { ProductDisplayType } from "../productDisplay.type";
import { action } from "@storybook/addon-actions";

const defaultArgs: ProductDisplayType = {
  image: '@/public/images/image-waffle-desktop.jpg',
  ctaButton: 'Add to Cart',
  title: 'Waffle with Berries',
  description: 'Delicious waffle topped with fresh berries.',
  price: 6.50,
  currency: 'GBP'
};

const { image, currency, title, description, price, ctaButton } = defaultArgs;

const meta: Meta<typeof ProductDisplay> = {
  title: "Example/ProductDisplay",
  component: ProductDisplay,
  tags: ["autodocs"],
  argTypes: {
    image: {
      description: "The image for the ProductDisplay component.",
      control: "text",
      defaultValue: image,
    },
    currency: {
      description: "The currency for the Button component.",
      control: "text",
      defaultValue: currency,
    },
    title: {
      description: "The title for the ProductDisplay component.",
      control: "text",
      defaultValue: title,
    },
    description: {
      description: "The description for the ProductDisplay component.",
      control: "text",
      defaultValue: description,
    },
    price: {
      description: "The price for the ProductDisplay component.",
      control: "number",
      defaultValue: price,
    },
    ctaButton: {
      description: "The CTA text for the ProductDisplay component.",
      control: "text",
      defaultValue: ctaButton,
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
