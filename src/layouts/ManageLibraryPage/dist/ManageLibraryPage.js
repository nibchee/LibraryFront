"use strict";
exports.__esModule = true;
exports.ManageLibraryPage = void 0;
var okta_react_1 = require("@okta/okta-react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AdminMessages_1 = require("./components/AdminMessages");
var AddNewBook_1 = require("./components/AddNewBook");
var ChangeQuantityOfBooks_1 = require("./components/ChangeQuantityOfBooks");
exports.ManageLibraryPage = function () {
    var _a;
    var authState = okta_react_1.useOktaAuth().authState;
    var _b = react_1.useState(false), changeQuantityOfBooksClick = _b[0], setchangeQuantityOfBooksClick = _b[1];
    var _c = react_1.useState(false), messagesClick = _c[0], setMessagesClick = _c[1];
    function addBookClickFunction() {
        setchangeQuantityOfBooksClick(false);
        setMessagesClick(false);
    }
    function changeQuantityOfBooksClickFunction() {
        setchangeQuantityOfBooksClick(true);
        setMessagesClick(false);
    }
    function messagesClickFunction() {
        setchangeQuantityOfBooksClick(false);
        setMessagesClick(true);
    }
    if (((_a = authState === null || authState === void 0 ? void 0 : authState.accessToken) === null || _a === void 0 ? void 0 : _a.claims.userType) === undefined) {
        return React.createElement(react_router_dom_1.Redirect, { to: "/home" });
    }
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "mt-5" },
            React.createElement("h3", null, "Manage Library"),
            React.createElement("nav", null,
                React.createElement("div", { className: "nav nav-tabs", id: 'nav-tab', role: 'tablist' },
                    React.createElement("button", { onClick: addBookClickFunction, className: "nav-link active", id: "nav-add-book-tab", "data-bs-toggle": 'tab', "data-bs-target": '#nav-add-book', type: 'button', role: 'tab', "aria-controls": "nav-add-book", "aria-selected": 'false' }, "Add new Book"),
                    React.createElement("button", { onClick: changeQuantityOfBooksClickFunction, className: "nav-link", id: "nav-quantity-tab", "data-bs-toggle": 'tab', "data-bs-target": '#nav-quantity', type: 'button', role: 'tab', "aria-controls": "nav-quantity", "aria-selected": 'true' }, "Change Quantity"),
                    React.createElement("button", { onClick: messagesClickFunction, className: "nav-link", id: "nav-messages-tab", "data-bs-toggle": 'tab', "data-bs-target": '#nav-messages', type: 'button', role: 'tab', "aria-controls": "nav-messages", "aria-selected": 'true' }, "Messages"))),
            React.createElement("div", { className: "tab-content", id: 'nav-tabContent' },
                React.createElement("div", { className: "tab-pane fade show active", id: 'nav-add-book', role: 'tabpanel', "aria-labelledby": "nav-add-book-tab" },
                    React.createElement(AddNewBook_1.AddNewBook, null)),
                React.createElement("div", { className: "tab-pane fade ", id: 'nav-quantity', role: 'tabpanel', "aria-labelledby": "nav-quantity-tab" }, changeQuantityOfBooksClick ? React.createElement(ChangeQuantityOfBooks_1.ChangeQuantityOfBooks, null) : React.createElement(React.Fragment, null)),
                React.createElement("div", { className: "tab-pane fade", id: 'nav-messages', role: 'tabpanel', "aria-labelledby": "nav-messages-tab" }, messagesClick ? React.createElement(AdminMessages_1.AdminMessages, null) : React.createElement(React.Fragment, null))))));
};
