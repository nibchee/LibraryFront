class ReviewModel {
    id: number;
    userEamil: string;
    date: string;
    rating: number;
    book_id: number;
    reviewDescrription?: string;

    constructor(id: number, userEamil: string, date: string, rating: number, book_id: number, reviewDescription: string) {
        this.id = id;
        this.userEamil = userEamil;
        this.date = date;
        this.rating = rating;
        this.book_id = book_id;
        this.reviewDescrription = reviewDescription;

    }
}
export default ReviewModel;