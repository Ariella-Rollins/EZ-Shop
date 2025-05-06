import { Router } from "express"
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js"

const productRouter = Router()

// routes
productRouter.route('/all')
    .get( getProducts )

productRouter.route('/')
    .post( createProduct )
    .put (updateProduct)
    .delete (deleteProduct)


export default productRouter
