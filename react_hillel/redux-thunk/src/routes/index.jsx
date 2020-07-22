import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components/header';
import { Form } from '../components/form';


import {MyMoviesContainer} from '../containers/MyMovies';
import {Greeting} from '../components/Greeting';

export const Main = () => {
    return(
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Greeting} exact />
                <Route path='/movies' component={MyMoviesContainer} />
                <Route path='/form' component={Form} />
            </Switch>
        </div>
        
    );
};