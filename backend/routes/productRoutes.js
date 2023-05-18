import express from 'express'
import {
  getProducts,
  getProductById,
  createProductReview,
} from '../controller/productController'
import { protect } from '../middleware/authMiddleware'


 const router = express.Router()

 
 router.route('/').get(getProducts).post(protect)
 router.route('/:id/reviews').post(protect, createProductReview)
 router.route('/:id').get(getProductById).put(protect)
 

 

 export default router