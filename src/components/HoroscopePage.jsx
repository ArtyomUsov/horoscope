import React, { Component } from "react";
import DateSelection from "./DateSelection";
import SignSelection from "./SignSelection";
import Card from "./Card";

class Horoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: "Выберете дату или свой знак зодиака",
      isFlipped: false,
      selectedDate: "",
      selectedSign: "default",
      showAnimation: false,
    };
  }

  handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    let selectedSign = this.state.selectedSign;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      selectedSign = "aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      selectedSign = "taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      selectedSign = "gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      selectedSign = "cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      selectedSign = "leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      selectedSign = "virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      selectedSign = "libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      selectedSign = "scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      selectedSign = "sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      selectedSign = "capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      selectedSign = "aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      selectedSign = "pisces";
    }

    this.setState({ selectedDate: e.target.value, selectedSign }, () => {
      this.handleSignChange({ target: { value: selectedSign } });
    });
  };
  
  
  handleSignChange = (e) => {
    const selectedSign = e.target.value;
    let prediction = this.state.prediction;

    if (selectedSign) {
      switch (selectedSign) {
        case "aries":
          prediction = "Предсказание для Овна";
          break;
        case "taurus":
          prediction = "Предсказание для Тельца";
          break;
        case "gemini":
          prediction = "Предсказание для Близнецов";
          break;
        case "cancer":
          prediction = "Предсказание для Рака";
          break;
        case "leo":
          prediction = "Предсказание для Льва";
          break;
        case "virgo":
          prediction = "Предсказание для Девы";
          break;
        case "libra":
          prediction = "Предсказание для Весов";
          break;
        case "scorpio":
          prediction = "Предсказание для Скорпиона";
          break;
        case "sagittarius":
          prediction = "Предсказание для Стрельца";
          break;
        case "capricorn":
          prediction = "Предсказание для Козерога";
          break;
        case "aquarius":
          prediction = "Предсказание для Водолея";
          break;
        case "pisces":
          prediction = "Предсказание для Рыб";
          break;
        default:
          prediction = "Выберете дату или свой знак зодиака";
      }
    }
    if (this.state.isFlipped) {
      this.setState({
        selectedSign,
        prediction,
        isFlipped: false,
        showAnimation: false,
      });
    } else {
      this.setState({ selectedSign, prediction, showAnimation: false });
    }
    // if (this.state.selectedSign !== this.setState.selectedSign) {
    // this.setState({ selectedDate: "" });
    // }
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      isFlipped: !prevState.isFlipped,
      showAnimation: !prevState.showAnimation,
    }));
  };

  render() {
    return (
      <div className="horoscope">
        <h1>Гороскоп</h1>
        <DateSelection
          handleDateChange={this.handleDateChange}
        />
        <SignSelection
          onChange={this.handleSignChange}
          value={this.state.selectedSign}
        />
        <Card
          onClick={this.handleCardClick}
          isFlipped={this.state.isFlipped}
          showAnimation={this.state.showAnimation}
          prediction={this.state.prediction}
        />
      </div>
    );
  }
}
export default Horoscope;
