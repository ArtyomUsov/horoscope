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
      this.setState({ selectedSign: selectedSign });
    });
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
