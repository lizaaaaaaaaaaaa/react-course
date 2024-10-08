import React, {FC} from 'react';
import {IReviewsModel} from "../models/IProductsModels";

const Review: FC<IReviewsModel> = ({rating, comment, date, reviewerName, reviewerEmail}) => {
    return (
        <li className={"review"}>
            <div><i>rating:</i> {rating}</div>
            <div><i>comment:</i> {comment}</div>
            <div><i>date:</i> {date}</div>
            <div><i>reviewerName:</i> {reviewerName}</div>
            <div><i>reviewerEmail:</i> {reviewerEmail}</div>
        </li>
    );
};

export default Review;