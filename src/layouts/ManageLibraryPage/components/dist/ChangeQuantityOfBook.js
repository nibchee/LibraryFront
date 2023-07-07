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
exports.ChangeQuantityOfBook = void 0;
var okta_react_1 = require("@okta/okta-react");
var react_1 = require("react");
exports.ChangeQuantityOfBook = function (props, key) {
    var authState = okta_react_1.useOktaAuth().authState;
    var _a = react_1.useState(0), quantity = _a[0], setQuantity = _a[1];
    var _b = react_1.useState(0), remaining = _b[0], setRemaining = _b[1];
    react_1.useEffect(function () {
        var fetchBookinState = function () {
            props.book.copies ? setQuantity(props.book.copies) : setQuantity(0);
            props.book.copiesAvailable ? setRemaining(props.book.copiesAvailable) : setRemaining(0);
        };
        fetchBookinState();
    }, []);
    function increaseQuantity() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, requestOptions, quantityUpdateResponse;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "http://localhost:8080/api/admin/secure/increase/book/quantity/?bookId=" + ((_a = props.book) === null || _a === void 0 ? void 0 : _a.id);
                        requestOptions = {
                            method: 'PUT',
                            headers: {
                                Authorization: "Bearer " + ((_b = authState === null || authState === void 0 ? void 0 : authState.accessToken) === null || _b === void 0 ? void 0 : _b.accessToken),
                                'Content-Type': 'application/json'
                            }
                        };
                        return [4 /*yield*/, fetch(url, requestOptions)];
                    case 1:
                        quantityUpdateResponse = _c.sent();
                        if (!quantityUpdateResponse.ok) {
                            throw new Error("Something went wrong");
                        }
                        setQuantity(quantity + 1);
                        setRemaining(remaining + 1);
                        return [2 /*return*/];
                }
            });
        });
    }
    function decreaseQuantity() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, requestOptions, quantityUpdateResponse;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "http://localhost:8080/api/admin/secure/decrease/book/quantity/?bookId=" + ((_a = props.book) === null || _a === void 0 ? void 0 : _a.id);
                        requestOptions = {
                            method: 'PUT',
                            headers: {
                                Authorization: "Bearer " + ((_b = authState === null || authState === void 0 ? void 0 : authState.accessToken) === null || _b === void 0 ? void 0 : _b.accessToken),
                                'Content-Type': 'application/json'
                            }
                        };
                        return [4 /*yield*/, fetch(url, requestOptions)];
                    case 1:
                        quantityUpdateResponse = _c.sent();
                        if (!quantityUpdateResponse.ok) {
                            throw new Error("Something went wrong");
                        }
                        setQuantity(quantity - 1);
                        setRemaining(remaining - 1);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "card mt-3 shadow p-3 mb-3 bg-body rounded" },
        React.createElement("div", { className: "row g-0" },
            React.createElement("div", { className: "col-md-2" },
                React.createElement("div", { className: "d-none d-lg-block" }, props.book.img ?
                    React.createElement("img", { src: props.book.img, width: '123', height: '196', alt: 'Book' })
                    :
                        React.createElement("img", { src: require('./../../../Images/BooksImages/book-luv2code-1000.png'), width: '123', height: '196', alt: 'Book' })),
                React.createElement("div", { className: "d-lg-none d-flex justify-content-center align-items-center" }, props.book.img ?
                    React.createElement("img", { src: props.book.img, width: '123', height: '196', alt: 'Book' })
                    :
                        React.createElement("img", { src: require('./../../../Images/BooksImages/book-luv2code-1000.png'), width: '123', height: '196', alt: 'Book' }))),
            React.createElement("div", { className: "col-md-6" },
                React.createElement("div", { className: "card-body" },
                    React.createElement("h5", { className: "card-title" }, props.book.author),
                    React.createElement("h4", null, props.book.title),
                    React.createElement("p", { className: "card-text" }, props.book.description))),
            React.createElement("div", { className: "mt-3 col-md-4" },
                React.createElement("div", { className: "d-flex justify-content-center align-items-center" },
                    React.createElement("p", null,
                        "Total Quantity:",
                        React.createElement("b", null, quantity))),
                React.createElement("div", { className: "d-flex justify-content-center align-items-center" },
                    React.createElement("p", null,
                        "Books Remaining: ",
                        React.createElement("b", null, remaining)))),
            React.createElement("div", { className: "mt-3 col-md-1" },
                React.createElement("div", { className: "d-flex justify-content-start" },
                    React.createElement("button", { className: "m-1 btn btn-md btn-danger" }, "Delete"))),
            React.createElement("button", { className: "m1 btn btn-md main-color text-white", onClick: increaseQuantity }, "Add Quantity"),
            React.createElement("button", { className: "m1 btn btn-md main-color text-white", onClick: decreaseQuantity }, "Decrease Quantity"))));
};
