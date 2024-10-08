import React, {FC} from 'react';
import {IProductsModel} from "../models/IProductsModel";
import Review from "./Review";
import "./products.css"

const Product: FC<IProductsModel> = (props) => {
    return (
        <li className={"product"}>
            <div><i>id:</i> {props.id}</div>
            <div><i>title:</i> {props.title}</div>
            <div><i>description:</i> {props.description}</div>
            <div><i>category:</i> {props.category}</div>
            <div><i>price:</i> {props.price}</div>
            <div><i>rating:</i> {props.rating}</div>
            <div><i>reviews:</i>
                <ul>{props.reviews.map((review, index) => <Review key={index + 1} rating={review.rating}
                                                                  comment={review.comment}
                                                                  date={review.date} reviewerName={review.reviewerName}
                                                                  reviewerEmail={review.reviewerEmail}/>)}</ul>
            </div>
            <div className="images">
                {props.images.map((image, index) => <img className={"image"} key={index + 1} src={image} alt={props.title}/>)}
            </div>
        </li>
    );
};

export default Product;