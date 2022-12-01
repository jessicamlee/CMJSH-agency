"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _Header = _interopRequireDefault(require("./components/Header"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _HomePage = _interopRequireDefault(require("./pages/HomePage"));
var _ProfilePage = _interopRequireDefault(require("./pages/ProfilePage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(_HomePage.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/ProfilePage",
    element: /*#__PURE__*/React.createElement(_ProfilePage.default, null)
  }))), /*#__PURE__*/React.createElement(_Footer.default, null));
}
var _default = App;
exports.default = _default;