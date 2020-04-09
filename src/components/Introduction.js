import React from 'react';
import styled from 'styled-components';

import { cards } from 'assets/images';

const Container = styled.div`
display: flex;
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
`

const Image = styled.img`
width: 615px;
height: 458.3px;
`;

const Heading = styled.span`
width: 500px;
height: 145px;

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
