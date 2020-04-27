import React from 'react';
import styled from 'styled-components';

import { cards } from 'assets/images';

const Container = styled.div`
display: flex;
@media(max-width: 768px) {
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
}
@media(max-width: 1024px){
  padding: 20px;
}
@media(max-width: 780px){
  margin-left: 10px !important;
  margin-right: 10px !important;
}
justify-content: space-around;
margin-top: 40px; /*40*/
`;
const Column = styled.div`
display: flex;
flex-direction: column;
`;
const Content = styled.span`
width: 399px;
height: 108px;
font-family: Merriweather Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 40px;
letter-spacing: 0.03em;
color: #353535;
margin-top: 51px;
@media(max-width: 768px) {
  margin-top: 0px;
  font-size: 15.84px;
  width: 327px;
}
@media(max-width: 780px){
  margin-top: 0px;
  font-size: 15.84px;
  width: 350px !important;
}
@media(max-width: 1024px){
  font-size: 17.6px;
  margin-left: 10px;
}
`;
const Button = styled.button`
width: 190px;
height: 52px;
background: #C22256;
border: none;
border-radius: 50px;
font-family: Merriweather Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 50px;
color: #FFFFFF;
margin-top: 60px;
cursor: pointer;
@media(max-width: 1024px){
  margin-left: 10px;
}
`

const Image = styled.img`
width: 615px;
height: 458.3px;
@media(max-width: 768px){
  width: 400px;
  height: 500px;
}
@media(max-width: 414px){
  width: 360px;
  height: 400px;
}
@media(max-width: 1098px){
  width: 380px;
  height: 450px;
}
`;

const Heading = styled.span`
width: 500px;
height: 145px;
@media(max-width: 1024px) {
  font-size: 43.4px;
  width: 310px;
  margin-left: 10px;
}
@media (max-width: 768px) {
  font-size: 40.7px;
  width: 300px;
}
@media(max-width: 414px){
  font-size: 38px;
  width: 250px;
}
font-family: Merriweather Sans;
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 80px;
letter-spacing: 0.03em;
color: #000000;
`

export default () => {
  return(
    <Container>
      <Column>
        <Heading>Box shadow generator</Heading>
        <Content>Create amazing box shadows easily and get CSS code for your project</Content>
        <Button onClick={() => window.scrollBy(0, 682)}>Start</Button>
      </Column>
      <Image src={cards} />
    </Container>
  )

}
