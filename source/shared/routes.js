import { Route } from 'react-router';
import createApp from 'shared/components/app';

export default React => {
  const App = createApp(React);

  return <Route path="/" component={App} />;
};
