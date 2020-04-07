import React from 'react';

import styled from 'styled-components';

const CodeContainer = styled.div`
  width: 483px;
  height: 144px;
  border: 2px solid #F5EFEF;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 200px;
  height: 53px;
  background: #C22256;
  border-radius: 100px;
  border: none;
  margin-top: 53px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  cursor: pointer;
`;
const Code = styled.span`
width: 399px;
${'' /* height: 115px; */}
font-family: Merriweather Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 30px;
text-align: center;
color: #F5EFEF;

`

export default () => (
  <>
    <CodeContainer>
      <Code>
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0);
         box-shadow: 10px 10px 5px 0px rgba(0,0,0,0);
      </Code>
    </CodeContainer>
    <Button>
      Copy css
    </Button>
  </>
)
