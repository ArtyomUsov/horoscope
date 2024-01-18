import React, { Component } from "react";

class DateSelection extends Component {
  render() {
    const selectedDate = this.props.value;
    const handleDateChange = this.props.onChange;
    return (
      <>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </>
    );
  }
}

export default DateSelection;
