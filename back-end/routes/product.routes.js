import { Router } from "express"
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js"

const productRouter = Router()

// testing route
productRouter.route('v1/all')
    .get( getProducts )

productRouter.route('v1/')
    .post( createProduct )
    .put (updateProduct)
    .delete (deleteProduct)


export default productRouter