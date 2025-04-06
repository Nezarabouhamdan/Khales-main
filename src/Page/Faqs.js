import React from 'react'
import { GlobalStyle } from '../components/Faqs/Globalstylefaq'
import FAQ from '../components/Faqs/Faq'
import OurProcessWork from '../components/OurProcessWork/OurProcessWork'
import img from '../assets/ENG.jpeg'
import img2 from '../assets/faq.jpg'
import { Faqdata } from '../data/Faqdata'
import styled from 'styled-components'
import { Section } from '../Globalstyles'
export const Row = styled.div`
  display: flex;
  flex-direction:row;
   justify-content: space-evenly;
      align-content:center;
      align-items:center;

    @media screen and (max-width: 968px) {
      justify-content: center;
      align-content:center;
      align-items:center;

   flex-direction:column;
   width:100vw;

  }
`;
export const Herosection = styled.div`
  height: 25vh;
  background-position: center;
  background-size: cover;
  display: flex;
  object-fit: cover;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  @media screen and (max-width: 968px) {
    height: 25vw;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

export const Heroimg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 25vh;
  position: absolute;
  filter: brightness(30%);
  z-index: -1;
  @media screen and (max-width: 968px) {
    object-fit: cover;

    width: 100%;
    height: 25vw;
  }
`;
const ResponsiveImage = styled.img`
  width: 25%;
  height: 350px;
  border-radius: 20px;
  transform: rotate(5deg);
  object-fit: cover;

  @media (max-width: 1200px) {
   width: 35%;

  }
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;export const Head = styled.p`
margin-top:20px;font-size:30px;
@media (max-width: 768px) {
margin-top:30px;font-size:18px;

}
`;
function Faqs(){
  return (
<>   
 <Row >
    <OurProcessWork panels={Faqdata}  button={false} />
    <ResponsiveImage src={img} alt="Responsive" />
    {/* <img height='450px'src={img} width={'25%' }style={{borderRadius:'20px' ,    transform: 'rotate(5deg)'}}></img> */}
    </Row>
    </>

  )
}

export default Faqs