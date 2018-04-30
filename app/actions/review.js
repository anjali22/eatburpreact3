export function addReview() {

    const request;  //CREATE FETCH POST REQUEST
    return {
        type: ADD_REVIEW,
        payload: request 
    };
}
 
export function addReviewSuccess() {
    return {
        type: ADD_REVIEW_SUCCESS,
        payload: restaurants 
    };
}

export function addReviewFailure() {
    return {
        type: ADD_REVIEW_FAILURE,
        payload: error 
    };
}
