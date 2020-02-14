import React from 'react';
import '../stylesheets/Player.css';

class Player extends React.Component {
    render(){
        return (
            <div className="player">{this.props.name}</div>
        );
    }
}

export default Player;