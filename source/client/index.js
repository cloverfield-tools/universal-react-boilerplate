import React from 'react';
import { render } from 'react-dom';
import createApp from 'shared/components/app';

const App = createApp(React);
const props = window.payload || {
  title: 'Default client title'
};

render(
  <App { ...props } />,
  document.getElementById('root')
);
