import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Films from './pages/Films';
import Landing from './pages/Landing';
import SideNavBar from './route/SideNavBar';

const App: React.FC<{}> = () => {

  return (
    <>
      <BrowserRouter>
        <SideNavBar/>
        <Switch>
          <Route path='/' exact><Landing/></Route>
          <Route path='/films'><Films/></Route>
          <Route path='/about'><About /></Route>
          <Route path='*'><Redirect to='/'/></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default hot(module)(App);
