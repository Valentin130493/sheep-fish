import React from 'react';
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../../../../store/hooks";
import {getProduct, removeProduct} from "../../../../../store/reducers/productSlice";


export interface ProductItem {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: [];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}


export const Item: React.FC<ProductItem> = (item) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const openProduct = (e: React.MouseEvent<HTMLTableRowElement>, id: number) => {
        e.stopPropagation()
        dispatch(getProduct(id))
        navigate(`/product/${id}`)
    }

    const remove = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation()
        dispatch(removeProduct(id))
    }

    return (
        <tr style={{cursor: 'pointer'}} onClick={(e: React.MouseEvent<HTMLTableRowElement>) => openProduct(e, item.id)}>
            <td className="cell">{item.id}</td>
            <td className="cell">{item.brand}</td>
            <td className="cell">{item.title}</td>
            <td className="cell">{item.description}</td>
            <td className="cell">{item.rating}</td>
            <td className="cell">{item.stock}</td>
            <td className="cell">{item.price}</td>
            <td>
                <button className={"remove"} onClick={(e) => remove(e, item.id)}>Remove</button>
            </td>
        </tr>
    );
};