var NumbersFrame = React.createClass({
  displayName: "NumbersFrame",


  render: function () {

    var numbers = [],
        selectNumber = this.props.selectNumber,
        usedNumbers = this.props.usedNumbers,
        selectedNumbers = this.props.selectedNumbers,
        className;

    for (var i = 1; i <= 9; i++) {

      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      className += " used-" + (usedNumbers.indexOf(i) >= 0);

      numbers.push(React.createElement(
        "div",
        { className: className, onClick: selectNumber.bind(null, i) },
        i
      ));
    }

    return React.createElement(
      "div",
      { id: "numbers-frame" },
      React.createElement(
        "div",
        { className: "well" },
        numbers
      )
    );
  }
});