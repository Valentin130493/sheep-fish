import React, { useState} from 'react';

import {useAppDispatch} from "../../../../../store/hooks";
import {toggleSortDirection} from "../../../../../store/reducers/productSlice";


const size =15

type SortBtnTypes = {
    label:string,
    text:string
}

export const Sort:React.FC<SortBtnTypes> = ({label,text}) => {
    const [isAscending,setIsAscending] = useState(true)
    const dispatch = useAppDispatch();

    const sortData = () => {
        setIsAscending(!isAscending)
        dispatch(toggleSortDirection({label, isAscending}));
    };

    return (
        <>
            {text}
            {isAscending ? (
                <img width={size} height={size} onClick={sortData} src={"https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/up_2-64.png"} alt="Sort Up"/>
            ) : (
                <img width={size} height={size}  onClick={sortData} src={"https://cdn3.iconfinder.com/data/icons/arrows-set-12/512/downlinearrow-128.png"} alt="Sort Down"/>
            )}
        </>
    );
};