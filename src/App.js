import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Blog from './components/Blog';
import ViewBlog from './components/ViewBlog';
import Haus from "./components/Haus";
import Timeline from "./components/Timeline";
import Uses from "./components/Uses";
import Now from "./components/Now";
import ReadingList from "./components/ReadingList";
import Talks from "./components/Talks";
import Colophon from "./components/Colophon";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/timeline' component={Timeline} />
        <Route exact path='/uses' component={Uses} />
        <Route exact path='/now' component={Now} />
        <Route exact path='/reading-list' component={ReadingList} />
        <Route exact path='/talks' component={Talks} />
        <Route exact path='/colophon' component={Colophon} />
        <Route exact path='/magic-the-gathering' component={Haus} />
        <Route exact path='/blog/:id' render={routeProps => <ViewBlog {...routeProps} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
