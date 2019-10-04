import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/Layout/NavBar';
import Dashboard from './views/Dashboard';
import CustomerShow from './views/Customer/CustomerShow';
import CustomerCreate from './views/Customer/CustomerCreate';

class App extends Component {
    render() {
        return (
          <div>
            <NavBar />
            <div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/customer/:id" component={CustomerShow} />
                <Route exact path="/customercreate" component={CustomerCreate} />
              </Switch>
            </div>
          </div>
        )
      }
}
export default App;