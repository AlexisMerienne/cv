import React from "react";
import './Interets.css'


class Interets extends React.Component {

    render(){
        return(
            <div className="interets-container" id="interets" shadow-green="">
                <div className="title">
                    <h2>Mes centres d'intérets</h2>
                </div>
                <div className="interets-content">
                    <ul>
                        <li>
                            <h5>Sports</h5>
                            <ul>
                                <li>Football : 10 ans de pratique en club</li>
                                <li>Course à pied</li>
                                <li>Ski et randonnée</li>
                            </ul>
                        </li>
                        <li>
                            <h5>Lecture</h5>
                            <ul>
                                <li>Romans d'initiations</li>
                                <li>Lecture contemporaine</li>
                            </ul>
                        </li>
                        <li>
                            <h5>Musique</h5>
                            <ul>
                                <li>Guitare : 12 ans de pratique</li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }

}

export default Interets;