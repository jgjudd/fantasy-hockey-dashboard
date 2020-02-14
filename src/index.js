import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerList from './components/PlayerList';
import LeagueStats from './components/LeagueStats';

class App extends React.Component {

    render(){
        return (
            <div className="app-container">
                <div className="app">
                    <PlayerList />
                    <LeagueStats />               
                </div>                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));