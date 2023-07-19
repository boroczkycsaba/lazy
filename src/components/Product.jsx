import React from 'react'
import { useParams, } from 'react-router-dom';
import { getData } from '../utils';
import { useQuery } from 'react-query';
import { ProductCard } from './ProductCard';

const productsUrl = 'https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Product = () => {
    const params= useParams()
    console.log(params)
    const {data, status, isLoading, isError} = useQuery(['products', productsUrl, params.id], getData)   
    status == 'success' && console.log(data[0].imgUrl)
  return (
    <div>
        {status == 'success' && <ProductCard {...data[0]} />}
        
    </div>
  )
}
