import React from 'react'
import { CardWrpr, DescriptionWrpr, ImageCont, Description } from './index.sc'

export default function Card({Img, Text}){
  return (
    <CardWrpr>
      <ImageCont Img={Img}/>
      <DescriptionWrpr>
        <Description>{Text}</Description>
      </DescriptionWrpr>
    </CardWrpr>
  )
}
