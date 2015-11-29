import { Route } from 'react-router';
import createApp from './components/App';

export default React => () => {
  const App = createApp(React);

  return <Route path="/" component={App} />;
};
