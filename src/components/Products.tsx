import React, {FC} from 'react';
import {productsData} from "../productsData";
import Product from "./Product";
import "./products.css"

const Products: FC = () => {
    return (
        <ul className={"products"}>
            {productsData.map(product => <Product key={product.id} id={product.id} title={product.title}
                                                  description={product.description} category={product.category}
                                                  price={product.price} discountPercentage={product.discountPercentage}
                                                  rating={product.rating} stock={product.stock} tags={product.tags}
                                                  brand={product.brand} sku={product.sku} weight={product.weight}
                                                  dimensions={product.dimensions}
                                                  warrantyInformation={product.warrantyInformation}
                                                  shippingInformation={product.warrantyInformation}
                                                  availabilityStatus={product.availabilityStatus}
                                                  reviews={product.reviews}
                                                  returnPolicy={product.returnPolicy}
                                                  minimumOrderQuantity={product.minimumOrderQuantity}
                                                  meta={product.meta}
                                                  images={product.images}
                                                  thumbnail={product.thumbnail}
            />)}
        </ul>
    );
};

export default Products;