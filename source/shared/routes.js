import React from 'react';
import { Route } from 'react-router';
import createApp from './components/App';

const App = createApp(React);

export default (
    <Route path="/" component={App} />
);
