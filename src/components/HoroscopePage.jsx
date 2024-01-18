import React, { Component } from "react";
import DateSelection from "./DateSelection";
import SignSelection from "./SignSelection";
import Card from "./Card";
import SunPhaseAndTime from "./SunPhaseAndTime";

class Horoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: "Выберете дату или свой знак зодиака",
      isFlipped: false,
      selectedDate: "",
      selectedSign: "default",
      showAnimation: false,
      signDates: "",
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
    let signDates = this.state.signDates;
    let selectedDate = this.state.selectedDate;

    if (selectedSign) {
      switch (selectedSign) {
        case "aries":
          prediction = "Предсказание для Овна";
          signDates = { startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 };
          break;
        case "taurus":
          prediction = "Предсказание для Тельца";
          signDates = { startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 };
          break;
        case "gemini":
          prediction = "Предсказание для Близнецов";
          signDates = { startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 };
          break;
        case "cancer":
          prediction = "Предсказание для Рака";
          signDates = { startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 };
          break;
        case "leo":
          prediction = "Предсказание для Льва";
          signDates = { startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 };
          break;
        case "virgo":
          prediction = "Предсказание для Девы";
          signDates = { startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 };
          break;
        case "libra":
          prediction = "Предсказание для Весов";
          signDates = { startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 };
          break;
        case "scorpio":
          prediction = "Предсказание для Скорпиона";
          signDates = {
            startMonth: 10,
            startDay: 23,
            endMonth: 11,
            endDay: 21,
          };
          break;
        case "sagittarius":
          prediction = "Предсказание для Стрельца";
          signDates = {
            startMonth: 11,
            startDay: 22,
            endMonth: 12,
            endDay: 21,
          };
          break;
        case "capricorn":
          prediction = "Предсказание для Козерога";
          signDates = { startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 };
          break;
        case "aquarius":
          prediction = "Предсказание для Водолея";
          signDates = { startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 };
          break;
        case "pisces":
          prediction = "Предсказание для Рыб";
          signDates = { startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 };
          break;
        default:
          prediction = "Выберете дату или свой знак зодиака";
      }
    }
    // анимация переворота карточки
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
    // проверка соответствия выбранной даты знаку, иначе установка даты на первый день выбранного знака
    if (selectedDate) {
      const date = new Date(selectedDate);
      const startDate = new Date(
        date.getFullYear(),
        signDates.startMonth - 1,
        signDates.startDay
      );
      const endDate = new Date(
        date.getFullYear(),
        signDates.endMonth - 1,
        signDates.endDay
      );

      if (date < startDate || date > endDate) {
        selectedDate = new Date(
          date.getFullYear(),
          signDates.startMonth - 1,
          signDates.startDay
        );
        const year = selectedDate.getFullYear();
        let month = selectedDate.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        let day = selectedDate.getDate();
        if (day < 10) {
          day = "0" + day;
        }
        const formattedDate = year + "-" + month + "-" + day;
        this.state.selectedDate = formattedDate;
      }
    }
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
        <SunPhaseAndTime/>
        <DateSelection
          onChange={this.handleDateChange}
          value={this.state.selectedDate}
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
