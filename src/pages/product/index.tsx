import React from 'react';

import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {clearProduct} from "../../store/reducers/productSlice";

import "./style.css"


const size = 240

export const ProductPage = () => {
    const dispatch = useAppDispatch()
    const product = useAppSelector(state => state.products.product)


    React.useEffect(() => {

        return () => {
            dispatch(clearProduct())
        }
    }, [])

    return (
        <div className={"product"}>
            <div className={"product_images"}>
                {product?.images.map((img: string, index) => {
                    return <img key={index} width={size} height={size} src={img} alt={"some_img"}/>
                })}
            </div>
            <p>{product?.brand}</p>
            <p>{product?.title}</p>
            <p>Rating:{product?.rating}</p>
            <p>Price: {product?.price} $</p>
            <p>Category:{product?.category}</p>
            <p>{product?.description}</p>
        </div>
    );
};

