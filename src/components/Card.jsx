import React, { Component } from "react";

class Card extends Component {
  render() {
    const isFlipped = this.props.isFlipped;
    const showAnimation = this.props.showAnimation;
    const prediction = this.props.prediction;
    const handleCardClick = this.props.onClick;
    return (
      <>
        <div
          className={`card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleCardClick}
        >
          <div className="card-inner">
            <div className="card-front">
              <p>Показать предсказание</p>
            </div>
            <div className="card-back">
              <p className={showAnimation ? "show-animation" : ""}>
                {prediction}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
