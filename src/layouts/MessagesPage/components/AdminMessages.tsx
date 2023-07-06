import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import MessageModel from "../../../models/MessageModel";
import { error } from "console";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Pagination } from "../../Utils/Pagination";

export const AdminMessages = () => {

    const { authState } = useOktaAuth();

    //Normal Loading Pieces
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [httpError, setHttpError] = useState(null);

    //Messages end point State
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [messagesPerPage] = useState(5);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUserMessages = async () => {
            if (authState && authState.isAuthenticated) {
                const url = `http://localhost:8080/api/messages/search/findByClosed/?closed=false&page=${currentPage - 1}&size=${messagesPerPage}`;
                const requestOptions = {
                    method: 'GET',
                    header: {
                        Authorization: `Bearer ${authState.accessToken?.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };
                const messageResponse = await fetch(url, requestOptions);
                if (!messageResponse.ok) {
                    throw new Error('Something went wrong!');
                }
                const messageResponseJson = await messageResponse.json();

                setMessages(messageResponseJson._embedded.messages);
                setTotalPages(messageResponseJson.page.totalPages);
            }
            setIsLoadingMessages(false);

        }
        fetchUserMessages().catch((error: any) => {
            setIsLoadingMessages(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [authState, currentPage]);

    if (isLoadingMessages) {
        return (
            <SpinnerLoading />
        );
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="mt-3">
            {messages.length>0?
            <>
            <h5>Pending Q/A:</h5>
            {messages.map(messages=>(
                <p>Questions that need a response</p>
            ))}
            </>
            :
            <h5>No Pending Q/A</h5>
            }
            {totalPages>1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>}
        </div>
    );
}
