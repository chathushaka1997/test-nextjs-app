import React from 'react'
import connectDb from '../db';
import ProductModel from '../models/Products';
import Image from 'next/image';

const product = ({ products }) => {
    return (
        <div>
          <h1>Product List</h1>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image src={product.images.tumbnailUrl} alt="" />
            
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      );
}

export async function getServerSideProps() {
    // Connect to MongoDB
  connectDb();

  try {
    // Fetch product data from MongoDB
    const products = await ProductModel.find().exec();

    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    console.error('Error fetching product data:', error);

    return {
      props: {
        products: [],
      },
    };
  }
  }

export default product