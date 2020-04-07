import React, { useEffect } from 'react';
// import Shape from './Shape.js';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Content from 'components/Content';

import { loadShadowproperty } from 'reducer';

 const App = ({ loadShadowproperty }) => {

   useEffect(() => {
     loadShadowproperty()
   },[loadShadowproperty])

  return (
    <>
      <Header />
      <Introduction />
      <Content />
    </>
  );
}

export default connect(null,{loadShadowproperty}) (App);
