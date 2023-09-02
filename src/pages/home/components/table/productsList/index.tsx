import React from 'react';

import {useAppSelector} from "../../../../../store/hooks";
import {Item, ProductItem} from "../productItem";


export const List: React.FC = () => {
    const products = useAppSelector((state) => state.products.products);
    const filter = useAppSelector((state) => state.products.filteredProducts);


    React.useEffect(() => {
    }, [products])

    return (
        <tbody>
        {(filter.length ? filter:products).map((item: ProductItem) => {
            return <Item {...item} key={item.id}/>
        })}
        </tbody>
    );
};