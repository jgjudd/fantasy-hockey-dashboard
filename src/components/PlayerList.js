import React from 'react';
import Player from './Player';

class PlayerList extends React.Component {
    render() {
        return (
            <div className="left-col">
                <h3>Player List</h3>
                <Player name="Yzerman" />
                <Player name="Howe" />
                <Player name="Redmond" />
                <Player name="Lidstrom" />
                <Player name="Sawchuck" />
                <Player name="Osgood" />
                <Player name="Fedorov" />
            </div>            
        );
    }
}

export default PlayerList;