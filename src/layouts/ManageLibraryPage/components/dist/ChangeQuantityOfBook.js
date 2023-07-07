"use strict";
exports.__esModule = true;
exports.ChangeQuantityOfBook = void 0;
var react_1 = require("react");
exports.ChangeQuantityOfBook = function (props, key) {
    var _a = react_1.useState(0), quantity = _a[0], setQuantity = _a[1];
    var _b = react_1.useState(0), remaining = _b[0], setRemaining = _b[1];
    react_1.useEffect(function () {
        var fetchBookinState = function () {
            props.book.copies ? setQuantity(props.book.copies) : setQuantity(0);
            props.book.copiesAvailable ? setRemaining(props.book.copiesAvailable) : setRemaining(0);
        };
        fetchBookinState();
    }, []);
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
            React.createElement("button", { className: "m1 btn btn-md main-color text-white" }, "Add Quantity"),
            React.createElement("button", { className: "m1 btn btn-md main-color text-white" }, "Decrease Quantity"))));
};
