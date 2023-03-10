import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Blog from './components/Blog';
import ViewBlog from './components/ViewBlog';
import Haus from "./components/Haus";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/magic-the-gathering' component={Haus} />
        <Route exact path='/blog/:id' render={routeProps => <ViewBlog {...routeProps} />} />
        <Route exact path='/*' component={Home} />
        <Route exact path='*' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
