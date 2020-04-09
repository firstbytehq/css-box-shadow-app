import React from 'react';

import { connect } from 'react-redux';

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
  overflow: auto;
  padding: 5px;
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
${'' /* min-height: 115px; */}
font-family: Merriweather Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 30px;
text-align: center;
color: #F5EFEF;
`

const CssCode = ({ shadowControls }) => {

  //const boxShadow = shadowControls.find(item=> item.isActive === true).boxShadow;
  let boxShadow = '';
  shadowControls.forEach((item, index)=> {
    if (index === 0) {
      boxShadow = item.boxShadow
    }else {
      boxShadow = boxShadow + ',' + item.boxShadow
    }
  })

  const copyCss = (copyText) => {
    let input = document.createElement('textarea');
    input.innerHTML = copyText;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  }

  return(
  <>
    <CodeContainer>
      <Code>
         {`-webkit-box-shadow: ${boxShadow};`} <br/>
         {`-moz-box-shadow: ${boxShadow};`} <br/>
         {`box-shadow: ${boxShadow};`}
      </Code>
    </CodeContainer>
    <Button
      onClick={() =>
        copyCss(
          `-webkit-box-shadow: ${boxShadow};
           -moz-box-shadow: ${boxShadow};
            box-shadow: ${boxShadow};`
        )
      }
    >
      Copy css
    </Button>
  </>
)}

const mapStateToProps = state => ({ shadowControls: state.shadowControls })

export default connect(mapStateToProps)(CssCode)
