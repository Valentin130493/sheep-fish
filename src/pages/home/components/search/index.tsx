import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearchTerm} from "../../../../store/reducers/productSlice";

import "./style.css"

type SearchProps ={
    searchTerm:string;
    changeTerm:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

export const Search:React.FC<SearchProps> = ({searchTerm,changeTerm}) => {
    const dispatch = useDispatch();

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        dispatch(setSearchTerm(searchTerm))
    }

    return (
        <form className="input_search" onSubmit={onSubmit}>
            <input
                value={searchTerm}
                autoFocus
                type="text"
                placeholder="search"
                onChange={changeTerm}
            />
        </form>
    );
};