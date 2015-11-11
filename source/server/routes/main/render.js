import React from 'react';
import reactDom from 'react-dom/server';
import createApp from 'shared/components/app';

const render = reactDom.renderToStaticMarkup;

const App = createApp(React);

const createDOM = (props) => {
  return render(
    <App { ...props }></App>
  );
};

export default createDOM;
