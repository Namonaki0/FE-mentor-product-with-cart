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
var react_1 = require("react");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var button_1 = require("../button");
describe('Button component', function () {
    var defaultProps = {
        currency: 'GBP',
        id: 'btn-1',
        orderTotal: 200
    };
    it('renders without crashing', function () {
        var getByRole = react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, defaultProps))).getByRole;
        var buttonElement = react_2.screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
    it('displays the correct currency', function () {
        var getByText = react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, defaultProps))).getByText;
        var buttonElement = react_2.screen.getByText(/GBP/i);
        expect(buttonElement).toBeInTheDocument();
    });
    it('renders the button element with correct class and text', function () {
        var container = react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, defaultProps))).container;
        var buttonElement = container.querySelector('button');
        expect(buttonElement).toHaveClass('button');
    });
});
