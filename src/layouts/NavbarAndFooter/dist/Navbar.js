"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Navbar = void 0;
var react_router_dom_1 = require("react-router-dom");
var okta_react_1 = require("@okta/okta-react");
var SpinnerLoading_1 = require("../Utils/SpinnerLoading");
exports.Navbar = function () {
    var _a, _b;
    var _c = okta_react_1.useOktaAuth(), oktaAuth = _c.oktaAuth, authState = _c.authState;
    if (!authState) {
        return React.createElement(SpinnerLoading_1.SpinnerLoading, null);
    }
    var handleLogout = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, oktaAuth.signOut()];
    }); }); };
    console.log(authState);
    return (React.createElement("nav", { className: 'navbar navbar-expand-lg navbar-dark main-color py-3' },
        React.createElement("div", { className: 'container-fluid' },
            React.createElement("span", { className: 'navbar-brand' }, "Nirbhay's Brain"),
            React.createElement("button", { className: 'navbar-toggler', type: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#navbarNavDropdown', "aria-controls": 'navbarNavDropdown', "aria-expanded": 'false', "aria-label": 'Toggle Navigation' },
                React.createElement("span", { className: 'navbar-toggler-icon' })),
            React.createElement("div", { className: 'collapse navbar-collapse', id: 'navbarNavDropdown' },
                React.createElement("ul", { className: 'navbar-nav' },
                    React.createElement("li", { className: 'nav-item' },
                        React.createElement(react_router_dom_1.NavLink, { className: 'nav-link', to: '/home' }, "Home")),
                    React.createElement("li", { className: 'nav-item' },
                        React.createElement(react_router_dom_1.NavLink, { className: 'nav-link', to: '/search' }, "Search Books")),
                    authState.isAuthenticated &&
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(react_router_dom_1.NavLink, { className: 'nav-link', to: '/shelf' }, "Shelf")),
                    authState.isAuthenticated && ((_b = (_a = authState.accessToken) === null || _a === void 0 ? void 0 : _a.claims) === null || _b === void 0 ? void 0 : _b.userType) == 'admin' &&
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(react_router_dom_1.NavLink, { className: 'nav-link', to: '/admin' }, "Admin"))),
                React.createElement("ul", { className: 'navbar-nav ms-auto' }, !authState.isAuthenticated ?
                    React.createElement("li", { className: 'nav-item m-1' },
                        React.createElement(react_router_dom_1.Link, { type: 'button', className: 'btn btn-outline-light', to: '/login' }, "Sign  In"))
                    :
                        React.createElement("li", { className: 'nav-item m-1' },
                            React.createElement("a", { type: 'button', className: 'btn btn-outline-light', onClick: handleLogout }, "Log  Out")))))));
};
