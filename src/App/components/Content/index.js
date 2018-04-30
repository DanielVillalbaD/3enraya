import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Ia } from '../../../scenes';


const Content = () => (
    <div>
        <Route path="/ia" component={ Ia } />
        <Route path="/" exact component={ Home } />        
    </div>
);

export default Content;