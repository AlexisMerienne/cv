import React from "react";
import "./FlipCard.css"



   

class FlipCard extends React.Component { 

   

    flip(event){
        const el = event.target;
        let inner = el.parentNode;
        inner.style.transform = 'rotateY(180deg)'
    }
    flipBack(event){
        const el = event.target;
        let inner = el.parentNode;
        let card = inner.parentNode;
        card.style.transform = 'rotate(0deg)'
        inner.style.transform = 'rotate(0deg)'
    }
    

    render(){
        return(
            <div className="flip-card">
            <div className="flip-card-inner" id="flip-card-inner">
            <div className="flip-card-front" onClick={this.flip}>
                <h3>{this.props.data.label}</h3>
            </div>
            <div className="flip-card-back" onClick={this.flipBack}>
                <h5>{this.props.data.content}</h5>
            </div>
            </div>
        </div>
        )
    }

}

export default FlipCard;