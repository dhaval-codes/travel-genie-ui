import React from 'react'
import { ContentWrpr, GridCardWrpr, GridWrpr, Header, HeaderWrpr, PageWrpr } from './index.sc'
import BackgroundImg from '../../assets/png/background.png'
import Card from '../../components/card'

const mappingArray = [
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653569/image_1_m3u7jm.png',
        description: 'Seamlessly translate English to any language with our AI-powered tool.'
    },
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653645/Distance_sshftr.png',
        description: 'Smartly calculate distances between places with our AI-powered distance tool.'
    },
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653722/Monument_zehloh.png',
        description: 'Discover must-visit local spots with our AI-powered recommendation tool.'
    },
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653772/fuel_ydskh4.png',
        description: 'Stay ahead with AI-driven future gas price predictions'
    },
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653835/Flight_ykhgpb.png',
        description: 'Book flights effortlessly with our AI-powered ticketing assistant.'
    },
    {
        img: 'https://res.cloudinary.com/dw6ntktro/image/upload/v1716653834/Train_gjvol7.png',
        description: 'Book train tickets effortlessly with our AI-powered assistant.'
    },
    
]

export default function FeaturesPage() {
  return (
    <PageWrpr bgImage={BackgroundImg}>
      <HeaderWrpr>
        <Header>
            How can <span>Travel Genie</span> help you ?
        </Header>
      </HeaderWrpr>
      <ContentWrpr>
        <GridWrpr>
            {mappingArray.map((ele,index)=>{
                return(
                    <GridCardWrpr key={index}>
                        <Card Text={ele.description} Img={ele.img}/>
                    </GridCardWrpr>
                )
            })}
        </GridWrpr>
      </ContentWrpr>
    </PageWrpr>
  )
}
