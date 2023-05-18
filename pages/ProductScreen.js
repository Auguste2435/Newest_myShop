import { useSelector, useDispatch } from 'react-redux';
import { createProductReview, listProductDetails } from '../src/components/actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../src/components/constants/productConstants';
import Rating from "../src/components/events/Rating"
import Message from "../src/components/mesage/Message"
import { Row, Col, ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import Link from "next/link"


const ProductScreen = ({ match }) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()


  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails || {}

  // const userLogin = useSelector((state) => state.userLogin)


  const productReviewCreate = useSelector((state) => state.productReviewCreate)

  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate || {}

  useEffect(() => {
    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(match?.params.id))
  }, [dispatch, match, successProductReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match?.params.id, {
        rating,
        comment,
      })
    )
  }
  return (

    <>


      <Row>
        <Col md={6}>
          <h2>Reviews</h2>
          {product?.reviews.length === 0 && <Message>No Reviews</Message>}
          <ListGroup variant='flush'>
            {product?.reviews?.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              {errorProductReview && (
                <Message variant='danger'>{errorProductReview}</Message>
              )}

              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h2>Write a customer review</h2>
                </div>
                <div>
                  <label htmlFor="rating">Rating</label>
                  <select id="rating" value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    <option value="">Select</option>
                    <option value="1">1- Bad</option>
                    <option value="2">2- Fair</option>
                    <option value="3">3- Good</option>
                    <option value="4">4- Very good</option>
                    <option value="5">5- Excelent</option>

                  </select>
                </div>
                <div>
               <label htmlFor="comment">Comment</label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <label />
                  <button className="primary" type="submit">
                    Submit
                  </button>
                </div>

              </form>

              <Message>
                Please 
                <Link href='/login' passHref
              > sign in </Link>
              to write a review</Message>

            </ListGroup.Item>
          </ListGroup>


        </Col>
      </Row>
    </>
  )


}


export default ProductScreen;
