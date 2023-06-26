import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { StarReview } from "../Utils/StarReviews";
import { CheckoutAndReviewBox } from "./CheckOutAndReviewBox";
import ReviewModel from "../../models/ReviewModel";

export const BookCheckOutPage = () => {

    //creating states
    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    //Review State
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [totalStars, setTotalStars] = useState(0);
    const [isLoadingReview, setIsLoadingReview] = useState(true);

    //this stores the book id of which we need information eg //locahost/bookcheckout/1
    const bookId = (window.location.pathname).split('/')[2];

    //useeffect is for fetching book with particular Id
    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img,
            };

            setBook(loadedBook);
            setIsLoading(false);
        };
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    //creating useeffect for Reviews
    useEffect(() => {
        const fetchBookReviews = async () => {
            const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?BookId=${bookId}`;

            const responseReviews = await fetch(reviewUrl);

            if (!responseReviews.ok) {
                throw new Error('Something Went Wrong');
            }

            const responseJsonReviews = await responseReviews.json();

            const responseData = responseJsonReviews._embedded.reviews;

            const loadReviews: ReviewModel[] = [];

            let weightedStarReviews: number = 0;

            for (const key in responseData) {
                loadReviews.push({
                    id: responseData[key].id,
                    userEamil: responseData[key].userEamil,
                    date: responseData[key].date,
                    rating: responseData[key].rating,
                    book_id: responseData[key].book_id,
                    reviewDescrription: responseData[key].reviewDescrription
                });
                weightedStarReviews = weightedStarReviews + responseData[key].rating;
            }

            if (loadReviews) {
                const round = (Math.round((weightedStarReviews / loadReviews.length) * 2) / 2).toFixed(1);
                setTotalStars(Number(round));
            }

            setReviews(loadReviews);
            setIsLoadingReview(false);
        };

        fetchBookReviews().catch((error: any) => {
            setIsLoadingReview(false);
            setHttpError(error.message);
        })

    }, []);

    //if API taking time
    if (isLoading || isLoadingReview) {
        return (
            <SpinnerLoading />
        )
    }
    //if there is http Error
    if (httpError) {
        return (
            <div className="conatiner m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div>
            {/*desktop*/}
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-2">
                        {book?.img ?
                            <img src={book?.img} width='226' height='349' alt='Book' />
                            :
                            <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                width='226'
                                height='349' alt='Book' />
                        }
                    </div>
                    <div className="col-4 col-md-4 container">
                        <div className="ml-2">
                            <h2>{book?.title}</h2>
                            <h5 className="text-primary">{book?.author}</h5>
                            <p className="lead">{book?.description}</p>
                            <StarReview rating={4} size={32} />
                        </div>
                    </div>
                    <CheckoutAndReviewBox book={book} mobile={false} />
                </div>
                <hr />
            </div>
            {/*mobile*/}
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {book?.img ?
                        <img src={book?.img} width='226' height='349' alt='Book' />
                        :
                        <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                            width='226'
                            height='349' alt='Book' />
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{book?.title}</h2>
                        <h5 className='text-primary'>{book?.author}</h5>
                        <p className="lead">{book?.description}</p>
                        <StarReview rating={4} size={32} />
                    </div>
                </div>
                <CheckoutAndReviewBox book={book} mobile={true} />
            </div>
            <hr />
        </div>);
}