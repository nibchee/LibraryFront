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
exports.ChangeQuantityOfBooks = void 0;
var react_1 = require("react");
var SpinnerLoading_1 = require("../../Utils/SpinnerLoading");
var Pagination_1 = require("../../Utils/Pagination");
var ChangeQuantityOfBook_1 = require("./ChangeQuantityOfBook");
exports.ChangeQuantityOfBooks = function () {
    var _a = react_1.useState([]), books = _a[0], setBooks = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(null), httpError = _c[0], setHttpError = _c[1];
    var _d = react_1.useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var booksPerPage = react_1.useState(5)[0];
    var _e = react_1.useState(0), totalAmountOfBooks = _e[0], setTotalAmountOfBooks = _e[1];
    var _f = react_1.useState(0), totalPages = _f[0], setTotalPages = _f[1];
    var _g = react_1.useState(false), bookDelete = _g[0], setBookDelete = _g[1];
    react_1.useEffect(function () {
        var fetchBooks = function () { return __awaiter(void 0, void 0, void 0, function () {
            var baseUrl, response, responseJson, responseData, loadedBooks, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = `${process.env.REACT_APP_API}/books?page=` + (currentPage - 1) + "&size=" + booksPerPage;
                        return [4 /*yield*/, fetch(baseUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Something went wrong!');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseJson = _a.sent();
                        responseData = responseJson._embedded.books;
                        setTotalAmountOfBooks(responseJson.page.totalElements);
                        setTotalPages(responseJson.page.totalPages);
                        loadedBooks = [];
                        for (key in responseData) {
                            loadedBooks.push({
                                id: responseData[key].id,
                                title: responseData[key].title,
                                author: responseData[key].author,
                                description: responseData[key].description,
                                copies: responseData[key].copies,
                                copiesAvailable: responseData[key].copiesAvailable,
                                category: responseData[key].category,
                                img: responseData[key].img
                            });
                        }
                        setBooks(loadedBooks);
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchBooks()["catch"](function (error) {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [currentPage, bookDelete]);
    var indexOfLastBook = currentPage * booksPerPage;
    var indexOfFirstBook = indexOfLastBook - booksPerPage;
    var lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    var deleteBook = function () { return setBookDelete(!bookDelete); };
    if (isLoading) {
        return (React.createElement(SpinnerLoading_1.SpinnerLoading, null));
    }
    if (httpError) {
        return (React.createElement("div", { className: "container m-5" },
            React.createElement("p", null, httpError)));
    }
    return (React.createElement("div", { className: "container mt-5" },
        totalAmountOfBooks > 0 ?
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: "mt-3" },
                    React.createElement("h3", null,
                        "Number of results:(",
                        totalAmountOfBooks,
                        ")")),
                React.createElement("p", null,
                    indexOfFirstBook + 1,
                    " to ",
                    lastItem,
                    " of ",
                    totalAmountOfBooks,
                    " items:",
                    React.createElement("p", null, books.map(function (book) { return (React.createElement(ChangeQuantityOfBook_1.ChangeQuantityOfBook, { book: book, key: book.id, deleteBook: deleteBook })); }))))
            :
                React.createElement("h5", null, "Add a book before changing quantity"),
        totalPages > 1 && React.createElement(Pagination_1.Pagination, { currentPage: currentPage, totalPages: totalPages, paginate: paginate })));
};
