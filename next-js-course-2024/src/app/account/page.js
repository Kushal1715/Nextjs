import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const userInfo = null;
  if (userInfo === null) redirect('/profile')
  return (
    <div>Account</div>
  )
}

export default page