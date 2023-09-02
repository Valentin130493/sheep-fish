import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {ProductItem} from "../../pages/home/components/table/productItem";


export const getProducts = createAsyncThunk(
    "data/fetchData",
    async (url: string) => {
        const response = await axios.get(url);
        return response.data.products;
    }
);

interface ProductState {
    products: ProductItem[],
    filteredProducts: ProductItem[]
    search: string,
    isLoading: boolean,
    error: null | string
    product: ProductItem | null
}


const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    product: null,
    search: '',
    isLoading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        toggleSortDirection: (state, {payload}) => {
            const compareValues = (a: string, b: string) => {
                if (a[payload.label] < b[payload.label]) {
                    return payload.isAscending ? -1 : 1;
                }
                if (a[payload.label] > b[payload.label]) {
                    return payload.isAscending ? 1 : -1;
                }
                return 0;
            };
            // @ts-ignore
            state.products = [...state.products].sort(compareValues);
        },
        setSearchTerm: (state, action) => {
            state.search = action.payload;
        },
        getProduct: (state, action) => {

            const item = state.products.filter((p) => p.id === action.payload);
            state.product = item[0]
        },
        clearProduct: (state) => {
            state.product = null
        },
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
                id: state.products.length + 1,
                rating: 0
            }
            state.products = state.products.concat(newProduct)
        },
        filterProduct: (state) => {
            state.filteredProducts = state.products.filter((item: ProductItem) => item.brand.toLowerCase().includes(state.search.toLowerCase()) ||
                item.category.toLowerCase().includes(state.search.toLowerCase()) ||
                item.title.toLowerCase().includes(state.search.toLowerCase()) || String(item.rating).includes(state.search.toLowerCase()) || String(item.price).includes(state.search.toLowerCase())
            )
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((prod) => prod.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.error.message;
            });
    },

});

export const {
    setSearchTerm,
    toggleSortDirection,
    getProduct,
    clearProduct,
    addProduct,
    filterProduct,
    removeProduct
} = productsSlice.actions;

export default productsSlice.reducer;