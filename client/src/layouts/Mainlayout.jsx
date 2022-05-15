import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '../components/styles/Container.styled'
import { MainStyle } from '../components/styles/Main.styled';

export default function Mainlayout(props) {
  return (
    <MainStyle>
      <Navbar />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </MainStyle>
  )
}
