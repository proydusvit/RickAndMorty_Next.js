import React from 'react'
import Image from "next/image";
import notFoundImg from "@/image/not-found.png"
import style from"./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={style.notFound}> <Image src={notFoundImg} alt="Not Found" width={800} height={450} /></div>
  )
}

export default NotFound