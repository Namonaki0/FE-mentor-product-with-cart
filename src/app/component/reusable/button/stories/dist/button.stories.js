"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Default = void 0;
var button_1 = require("../../button");
var defaultArgs = {
    currency: "GBP",
    id: "button",
    orderTotal: 200
};
var currency = defaultArgs.currency, id = defaultArgs.id, orderTotal = defaultArgs.orderTotal;
var meta = {
    title: "Example/Button",
    component: button_1.Button,
    tags: ["autodocs"],
    argTypes: {
        currency: {
            description: "The currency for the Button component.",
            control: "text",
            defaultValue: currency
        },
        id: {
            description: "The id for the Button component.",
            control: "text",
            defaultValue: id
        },
        orderTotal: {
            description: "The optional order Total for the Button component.",
            control: "number",
            defaultValue: orderTotal
        }
    }
};
exports["default"] = meta;
exports.Default = {
    args: __assign({}, defaultArgs)
};
