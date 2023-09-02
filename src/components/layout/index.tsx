import React from "react";
import {Outlet} from "react-router";
import {Header} from "../header";
import {useAppDispatch} from "../../store/hooks";
import {getProducts} from "../../store/reducers/productSlice";
import {BASE_URL} from "../../static";

import "./style.css";


export const Layout: React.FC = () => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getProducts(`${BASE_URL}products`));
    }, [])

    return <div className={"layout"}>
        <Header/>
        <Outlet/>
    </div>
};
