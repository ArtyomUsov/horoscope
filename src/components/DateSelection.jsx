import React, { Component } from "react";

class DateSelection extends Component {
  render() {
    const selectedDate = this.props.selectedDate;
    const handleDateChange = this.props.handleDateChange;
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
