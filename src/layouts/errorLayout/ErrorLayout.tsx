import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header";

const ErrorLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <h2 className={"title"}>Oops! Wrong Page!</h2>
            <button className={"btn"} onClick={() => navigate("/")}>Back to Home!</button>
        </div>
    );
};

export default ErrorLayout;