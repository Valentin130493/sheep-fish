import React from "react";
import {Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../store/hooks";
import {validationProductSchema} from "../product/validation";
import {addProduct} from "../../store/reducers/productSlice";
import {useNavigate} from "react-router";
import {routes} from "../../static";

import "./style.css"

interface Values {
    brand: string,
    description: string,
    title: string,
    price: string,
    stock: string,
    category: string
}


const initialValues = {
    brand: "",
    description: "",
    title: "",
    price: "",
    stock: "",
    category: "",
};


export const AddProductPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        dispatch(addProduct(values))
        setSubmitting(false)
        navigate(routes.home)
    }

    return (
        <div className={"add-form"}>
            <h2>Add new product</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationProductSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      handleChange,
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className={"add-form_input"}
                            type="text"
                            name="brand"
                            placeholder={"Enter brand"}
                            onChange={handleChange}
                            value={values.brand}
                        />
                        {errors.brand && errors.brand}
                        <input
                            type="text"
                            name="title"
                            placeholder={"Enter title"}
                            onChange={handleChange}
                            className={"add-form_input"}
                            value={values.title}
                        />
                        {errors.title && errors.title}
                        <input
                            type="number"
                            name="price"
                            placeholder={"Define price"}
                            onChange={handleChange}
                            className={"add-form_input"}
                            value={values.price}
                        />
                        {errors.price && errors.price}
                        <textarea
                            name="description"
                            placeholder={"Enter description"}
                            onChange={handleChange}
                            className={"add-form_input"}
                            value={values.description}
                        />
                        {errors.description && errors.description}

                        <input
                            type="number"
                            name="stock"
                            placeholder={"Choose stock count"}
                            onChange={handleChange}
                            className={"add-form_input"}
                            value={values.stock}
                        />
                        {errors.stock && errors.stock}
                        <input
                            type="text"
                            name="category"
                            placeholder={"Write category"}
                            onChange={handleChange}
                            className={"add-form_input"}
                            value={values.category}
                        />
                        {errors.category && errors.category}

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};
