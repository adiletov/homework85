import React, {Component} from 'react';
import './App.css';
import Header from "./Containers/Header/Header";
import Artists from "./Containers/Artists/Artists";
import {Route, Switch} from "react-router-dom";
import infoArtist from "./Containers/Albums/Albums";
import trackArtist from "./Containers/Tracks/Tracks";
import Register from "./Containers/Register/Register";
import Login from "./Containers/Login/Login";
import {connect} from "react-redux";
import TrackHistory from "./Containers/TrackHistory/TrackHistory";


class App extends Component {
    render() {
        return (
            <div>
                <Header user={this.props.user}/>
                <div className="container">
                    <Switch>
                        <Route path='/' exact component={Artists}/>
                        <Route path='/albums/:id' exact component={infoArtist}/>
                        <Route path='/tracks/:id' exact component={trackArtist}/>
                        <Route path='/register' exact component={Register}/>
                        <Route path='/login' exact component={Login}/>
                        <Route psth='/track_history' exact component={TrackHistory}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});
export default connect(mapStateToProps, null)(App);
