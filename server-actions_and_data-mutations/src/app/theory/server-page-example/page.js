import React from 'react'

const ServerActionExample = async () => {

  async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data?.products;
  }

  const result = await fetchProducts();
  console.log(result)
  return (
    <div>
      <h1>
        Server action example in server component
      </h1>
    </div>
  )
}

export default ServerActionExample