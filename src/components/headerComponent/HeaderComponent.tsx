import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HeaderComponent:FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/users"}>Users</Link></li>
                    <li><Link to={"/posts"}>Posts</Link></li>
                    <li><Link to={"/comments"}>Comments</Link></li>
                    <li><Link to={"/posts&comments"}>Posts with Comments</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;