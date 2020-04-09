import React, {useEffect} from 'react';
// import Shape from './Shape.js';
import ReactGA from 'react-ga';

import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Content from 'components/Content';

 const App = () => {
    useEffect(()=>{
      ReactGA.initialize('UA-163458204-1');
      ReactGA.pageview('/homepage');
    })

  return (
    <>
      <Introduction />
      <Content />
    </>
  );
}

export default App;
export { ReactGA};
