import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HomePage: FC = () => {
    return (
        <div>
            <h1 className={"title"}>Welcome!</h1>
            <Link to={"users"} className={"link"}>Explore users!</Link>
        </div>
    );
};

export default HomePage;