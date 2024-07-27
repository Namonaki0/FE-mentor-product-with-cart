"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
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
var Button = function (_a) {
    var currency = _a.currency, id = _a.id, _b = _a.price, price = _b === void 0 ? 200 : _b, children = _a.children;
    var _id = id || "button";
    var value = price.toFixed(2);
    return (react_1["default"].createElement("button", { id: _id, className: "button" },
        children,
        " - ",
        currency,
        " ",
        value));
};
exports["default"] = Button;
