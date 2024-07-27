"use client";

import React from 'react';
import type { ButtonType } from "./button.type";
/**
 * Button component.
 *
 * @component
 * @example
 * <Button currency="GBP" id="button" orderTotal={200} />
 * @param {Object} props - The props for the Button component.
 * @param {string} props.currency - The currency for the Button component.
 * @param {string} props.id - The optional id for the Button component.
 * @param {string} props.orderTotal - The optional orderTotal for the Button component.
 * @returns {ReactElement} - The rendered Button component.
 */
const Button: React.FC<ButtonType> = ({ currency, id, orderTotal = 200 }) => {
  const _id = id || "button";
  const value = orderTotal.toFixed(2);

  return (
    <button id={_id} className="button">
      {currency} {value}
    </button>
  );
};

export default Button;
