import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProductReducer';
import Link from 'react-router-dom/Link';
import { useParams } from 'react-router';

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <div>
      <div key={product.id}>
        <img
          src={product.imageUrl}
          style={{ width: '400px', height: '400px' }}
        />
        <h1>{product.name}</h1>
        <h2>Size: {product.size}</h2>
        <h2>Price: ${product.price}.00</h2>
        <h3>Description: {product.description}</h3>
      </div>
    </div>
  );
};

export default SingleProduct;