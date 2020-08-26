import React from 'react'
import styled from 'styled-components'
import header from './images/header.svg'
import {ReactComponent as Title} from '../assets/title.svg'
import Socials from '../components/Socials'

const Hero = () => {
  return (
    <HeroWrapper id='hero'>
      <h1>
        <Header />
      </h1>
      
      <div>
      <h2>WEB DEVELOPER</h2>
      <p>in training</p>
      </div>
      
      
      <Socials />
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  height: 100vh;
  color: ${({theme}) => theme.color.neon};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    width: 60%;
    min-width: 600px;
  }

  p {
    color: gray
  }
`
const Header = styled(Title)`
  text-anchor: middle;
  fill: ${({theme}) => theme.color.bgMain};
  stroke: ${({theme}) => theme.color.neon};
  stroke-width: 0.01;
  font-size: 34px;
  font-family: 'Titillium Web', sans-serif;
  animation: draw 2s ease-in-out infinite;
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  filter: url(#glow);
  opacity: 0;

  @keyframes draw {
  100% {
    stroke-dashoffset: 0%;
    fill: ${({theme}) => theme.color.neon};
    opacity: 1;
    }
  }
`

export default Hero