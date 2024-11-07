import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HomePage:FC = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <Link to={"/users"}>Explore users!</Link>
        </>
    );
};

export default HomePage;