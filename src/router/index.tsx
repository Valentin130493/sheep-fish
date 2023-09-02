import React from "react";
import {createBrowserRouter,} from "react-router-dom";
import {routes} from "../static";
import {HomePage, ErrorPage, ProductPage, AddProductPage} from "../pages";
import {Layout} from "../components";


export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: routes.error, element: <ErrorPage/>},
            {path: routes.product, element: <ProductPage/>},
            {path: routes.add, element: <AddProductPage/>},
        ]
    },
]);