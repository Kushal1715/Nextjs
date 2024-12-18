'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const pathName = usePathname();
  // console.log(pathName)

  const searchParams = useSearchParams();
  console.log(searchParams.get('itemNumber'))
  console.log(searchParams.get('cartNumber'))
  return (
    <div>this is cart page of client component</div>
  )
}

export default page