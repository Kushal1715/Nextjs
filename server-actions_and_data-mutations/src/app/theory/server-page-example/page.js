import { fetchProducts } from '@/actions';
import React from 'react'

const ServerActionExample = async () => {



  const result = await fetchProducts();
  console.log(result)
  return (
    <div>
      <h1>
        Server action example in server component
      </h1>
      <ul>
        {result.map((product, index) => <li key={index}>{product.title}</li>)}
      </ul>
    </div>
  )
}

export default ServerActionExample