import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
  const [products, setProduct] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    fetch(ENDPOINT)
    .then(res=>res.json())
    .then()
  })

  return (
    <div className='h-screen grid place-content-center text-6xl'>Service</div>
  )
}
