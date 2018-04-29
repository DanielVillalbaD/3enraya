import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Header, Content } from './components';

injectGlobal`
  ${normalize()}  
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