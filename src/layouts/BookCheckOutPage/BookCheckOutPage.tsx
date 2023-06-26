import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckOutPage = () => {

    //creating states
    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);

    //this stores the book id of which we need information eg //locahost/bookcheckout/1
    const bookId = (window.location.pathname).split('/')[2];
    return (
        <div>
            <h3>
                Hi World!
            </h3>

        </div>);
}