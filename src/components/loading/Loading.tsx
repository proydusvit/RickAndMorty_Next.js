import Image from 'next/image'
import React from 'react'
import loader from "../../../public/loader.gif"
const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="Loader..." />
    </div>
  )
}

export default Loading