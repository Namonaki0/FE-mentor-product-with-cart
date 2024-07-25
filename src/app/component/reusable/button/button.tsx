"use client";

import type { Button } from "./button.type.ts";
import styles from "../cta/cta.module.css";

/**
 * Button component.
 *
 * @component
 * @example
 * <Button currency="GBP" id="button" onComplete={() => {}} orderTotal={200} />
 * @param {Object} props - The props for the Button component.
 * @param {string} props.currency - The currency for the Button component.
 * @param {string} props.id - The optional id for the Button component.
 * @param {string} props.orderTotal - The optional orderTotal for the Button component.
 * @returns {ReactElement} - The rendered Button component.
 */
const Button: React.FC<ButtonType> = observer(
  ({ currency, id, orderTotal = 0 }) => {
    const _id = id || "button";
    const { cta } = styles;
    const storeCheckout = useStore().storeCheckout || {};
    const value = (storeCheckout?.computedOrderTotal || orderTotal).toFixed(2);

  },
);

export default Button;
