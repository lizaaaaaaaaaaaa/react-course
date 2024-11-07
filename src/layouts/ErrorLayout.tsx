import React, {FC} from 'react';
import {Link} from "react-router-dom";

const ErrorLayout:FC = () => {
    return (
        <>
            <h1>Oops! Wrong page!</h1>
            <Link to={"/"}>
                Back to home
            </Link>
        </>
    );
};

export default ErrorLayout;