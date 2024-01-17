import React, { Component } from "react";

class SignSelection extends Component {
  render() {
    const selectedSign = this.props.value;
    const handleSignChange = this.props.onChange;
    return (
      <div>
        <select value={selectedSign} onChange={handleSignChange}>
          <option value="default">Выберите знак зодиака</option>
          <option value="aries">Овен</option>
          <option value="taurus">Телец</option>
          <option value="gemini">Близнецы</option>
          <option value="cancer">Рак</option>
          <option value="leo">Лев</option>
          <option value="virgo">Дева</option>
          <option value="libra">Весы</option>
          <option value="scorpio">Скорпион</option>
          <option value="sagittarius">Стрелец</option>
          <option value="capricorn">Козерог</option>
          <option value="aquarius">Водолей</option>
          <option value="pisces">Рыбы</option>
        </select>
      </div>
    );
  }
}

export default SignSelection;
