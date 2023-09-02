import React from "react";

import {useNavigate} from "react-router";
import {routes} from "../../static";


export const ErrorPage = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate(routes.home)
    }

    return (
        <div>
            <h1>Oops!</h1>
            <h4>
                Something went wrong.
            </h4>
            <button onClick={toHome}>
                Go back to homepage
            </button>
        </div>
    );
};