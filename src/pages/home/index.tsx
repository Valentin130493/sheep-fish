import React from 'react';

import {Table} from "./components";

import "./style.css"

export const HomePage = () => {

    return (
        <div className={"home"}>
            <h1> All products</h1>
            <Table/>
        </div>
    );
};
