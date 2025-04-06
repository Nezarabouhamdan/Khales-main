import React from 'react'
import OurProcessWork from '../OurProcessWork/OurProcessWork'
import img from '../../assets/process.jpg'
import { Container } from './ProcessStyles'
import { StepsData } from '../../data/StepsData'
import styled from 'styled-components'
import { Title } from '../Whoweare/TextContent'
const Row=styled.div`  display: flex;
  flex-direction:row;
  justify-content: space-evenly; 
   @media screen and (max-width: 968px) {
   
   height:150vh;
     flex-direction:column;
  } ;`
   const Processimg=styled.img`
   border-radius:20px ;
     height:100%;
     width:22%;
      transform: rotate(15deg);
   @media screen and (max-width: 968px) {
        height:400px; 
      transform: rotate(0deg);

        width:90%;

  } ;`


function Process() {

  return (
    <><Container>
       <Title>
          <h2 className="fsz-45" style={{fontFamily: "Inter",marginTop:'80px'}}>Our Process Work</h2>
        </Title>
    <Row>
    <OurProcessWork panels={StepsData} button={true}/>
    <Processimg src={img} ></Processimg>
    </Row>
    </Container>
    </>
  )
}

export default Process