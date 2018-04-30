import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Header, Content } from './components';

injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html {box-sizing: border-box;}
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1 {
    font-size: 3.6rem;
  }
`;

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Content />
    </div>
  </BrowserRouter>
);

export default App;