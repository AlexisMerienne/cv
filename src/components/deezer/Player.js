import React from "react";
import './Player.css'



class Player extends React.Component {

    render() {
        return(
            <div className="player-container" shadow-green="">
                <div className="title">
                    <h2>Ma Playlist</h2>
                </div>
                <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/9753874462" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </div>
        )
    }

}

export default Player;