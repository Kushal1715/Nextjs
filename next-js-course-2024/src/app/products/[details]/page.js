import React from 'react'

const ProductDetails = async (props) => {
  const param = await props.params
  console.log(param.details)
  return (
    <div>this is product details page</div>
  )
}

export default ProductDetails