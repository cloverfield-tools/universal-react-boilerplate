import { Router, Route } from 'react-router';
import createApp from 'shared/components/app';
import createTestData from 'shared/components/test-data';

export default (React, browserHistory) => {

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ createApp(React) } />
      <Route path="/test-data" component={ createTestData(React) } />
    </Router>
  );
};
