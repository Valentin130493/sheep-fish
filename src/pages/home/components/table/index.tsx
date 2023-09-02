import React from 'react';
import {Search} from "../search";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {filterProduct, setSearchTerm} from "../../../../store/reducers/productSlice";
import {List} from "./productsList";
import {Sort} from "./sortBtn";

import "./style.css"

const sortButtonsArray = [
    {
        label: "id",
        text: 'Id'
    },
    {
        label: "brand",
        text: 'Brand'
    },
    {
        label: "title",
        text: 'Title'
    },
    {
        label: "description",
        text: 'Description'
    },
    {
        label: "rating",
        text: 'Rating'
    },
    {
        label: "stock",
        text: 'Stock'
    },
    {
        label: "price",
        text: 'Price $'
    }
]

export const Table = () => {

    const dispatch = useAppDispatch();

    const searchTerm = useAppSelector((state) => state.products.search);
    const changeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value.trim()));
        dispatch(filterProduct())
    };

    return (
        <>
            <Search searchTerm={searchTerm} changeTerm={changeTerm}/>
            <table className="table">
                <thead>
                <tr>
                    {sortButtonsArray.map((item, index) => {
                        return <th key={index}><Sort  {...item}/></th>
                    })}
                </tr>
                </thead>
                <List/>
            </table>
        </>
    );
};

