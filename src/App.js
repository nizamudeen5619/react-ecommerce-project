import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {


  unsubscribeFromAuth = null
  componentDidMount() {
  const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {//check if user signed in
        //create user if does not exists or get user data and update state
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {//whenever user Snapshot updates dispatching setCurrentUser action is dispatched
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()//close subscription to prevent memory leak
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }

}

/*
line 21: unsubscribeFromAuth is initialised as null

line 24: unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged().This method also returns another method: firebase.unsubscribe().

(see docs here: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#returns-firebase.unsubscribe)

line 32: so when unsubscribeFromAuth() is called inside the componentWillUnmount, it now has the value of firebase.unsubscribe(), which executes, closing the session.

*/

const mapDispatchToPass = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))//dispatches action object by invoking setCurrentUser from user.actions
})

export default connect(null, mapDispatchToPass)(App);//only setUser and no need for user here so null
