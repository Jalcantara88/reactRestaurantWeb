import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return(
            <>

                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/menu'>
                        <Menu />
                    </Route>
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default Main;