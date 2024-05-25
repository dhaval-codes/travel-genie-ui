import React from 'react'
import { Button, ButtonText, ContentsDiv, Description, Heading, PageWrpr, SemiHeading } from './index.sc'
import BackGroundImage from '../../assets/png/background.png'
import {useNavigate} from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <PageWrpr bgImage={BackGroundImage}>
      <ContentsDiv>
        <SemiHeading>
            Smart travel unlocked by
        </SemiHeading>
        <Heading>
            TRAVEL GENIE
        </Heading>
        <Description>
            Explore effortlessly with your AI-powered travel companion
        </Description>
        <Button>
          <ButtonText onClick={()=>navigate('/features')}>
            Let's get started
          </ButtonText>
        </Button>
      </ContentsDiv>
    </PageWrpr>
  )
}
