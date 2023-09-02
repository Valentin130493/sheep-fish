import * as Yup from "yup";

export const validationProductSchema = Yup.object({
    brand: Yup.string().required("Required"),
    description: Yup.string().min(10),
    title: Yup.string(),
    price: Yup.number().required("Required"),
    stock: Yup.number().required("Required"),
    category: Yup.string().required("Required"),
});
