import SearchBar from './components/functionalComponents/search_bar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
