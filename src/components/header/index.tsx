import React from 'react';
import {useNavigate} from "react-router";
import {routes} from "../../static";

import "./style.css"


export const Header = () => {
    const navigate = useNavigate()

    return (
        <div className={"header"}>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
            <button onClick={() => navigate(routes.add)}>add product</button>
        </div>
    );
};

