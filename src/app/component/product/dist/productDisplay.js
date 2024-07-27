"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("../reusable/button");
var image_1 = require("next/image");
var ProductDisplay = function (_a) {
    var image = _a.image, ctaButton = _a.ctaButton, title = _a.title, description = _a.description, price = _a.price, currency = _a.currency;
    return (react_1["default"].createElement("div", { className: "product-display" },
        react_1["default"].createElement(image_1["default"], { src: image, alt: title, className: "product-image" }),
        react_1["default"].createElement(button_1.Button, { currency: currency, price: price }, ctaButton),
        react_1["default"].createElement("h2", { className: "product-title" }, title),
        react_1["default"].createElement("p", { className: "product-description" }, description),
        react_1["default"].createElement("p", { className: "product-price" },
            "$",
            price.toFixed(2))));
};
exports["default"] = ProductDisplay;
