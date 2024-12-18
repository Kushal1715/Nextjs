import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const userInfo = null;
  if (userInfo === null) redirect('cart?itemNumber=7&cartNumber=1')
  return (
    <div>Account</div>
  )
}

export default page