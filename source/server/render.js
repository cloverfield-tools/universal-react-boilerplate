import { renderToString } from 'react-dom/server';
import { RoutingContext } from 'react-router';
import { Provider } from 'react-redux';

export default React => (renderProps, store) => {
  return renderToString(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};
