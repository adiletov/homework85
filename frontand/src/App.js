import React from 'react';
import './App.css';
import Header from "./Containers/Header/Header";
import Artists from "./Containers/Artists/Artists";
import {Route, Switch} from "react-router-dom";
import infoArtist from "./Containers/Albums/Albums";
import trackArtist from "./Containers/Tracks/Tracks";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <Switch>
                <Route path='/' exact component={Artists}/>
                <Route path='/albums/:id' exact component={infoArtist} />
                <Route path='/tracks/:id' exact component={trackArtist}/>
            </Switch>
        </div>
    </div>
  );
}

export default App;
