import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const userInfo = null;
  if (userInfo === null) redirect('products/2?search=product1')
  return (
    <div>Account</div>
  )
}

export default page