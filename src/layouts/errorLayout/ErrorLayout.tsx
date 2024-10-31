import React, {FC} from 'react';
import {Link} from "react-router-dom";

const ErrorLayout:FC = () => {
    return (
        <>
            <h1 className={"title"}>Oops! Wrong page!</h1>
            <Link to={"/"} className={"link"}>Back to home!</Link>
        </>
    );
};

export default ErrorLayout;