import Apidata from './components/Apidata';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch, Route}  from "react-router-dom"
import Transaction from './components/Transaction';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      {/* <link rel="stylesheet" href="./src/Support.css"></link> */}
      <Switch>
    <Route exact path="/" component={Apidata}/>
    <Route exact path="/transaction" component={Transaction}/>
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
