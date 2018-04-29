import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Result } from '../../../scenes';


const Content = () => (
    <div>
        <Route path="/result" component={ Result } />
        <Route path="/" exact component={ Home } />        
    </div>
);

export default Content;