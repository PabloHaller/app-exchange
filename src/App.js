import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './components/generics/login/Login';
import Home from './components/generics/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Offer from './components/offer/Offer';
import ConfirmTransaction from './components/ConfirmTransaction/ConfirmTransaction';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false, 
        userId: 19640328,
        userName: "phaller"
      }
    }

    render() {
      //Desconocería si esta es la forma más correcta de hacerlo. Tendría que ir viendo y modificarlo; por mientras que quede este chanchullo.
      //La verdad es que está todo mal hecho, pero voy a ver como arreglarlo, don't worry, ticket for me. 
        const { AUTHENTICATED, USERID, USERNAME } = this.state;
        return (
          <Router>
            <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/buy" component={Home}/>
            <Route exact path="/search" component={Home}/>
            <Route exact path="/offer" component={Offer}/>
        {/* <Route exact path="/transaction/:transactionId/confirm" render={(props) => console.log(props)>}/> */}
        <Route exact path="/transaction/:transactionId/confirm" render={(props) => <ConfirmTransaction {...props} transactionId={props.match.params.transactionId} />}/>
            </div>
          </Router>
        );
    }
}

App.propTypes = {

};

export default App;