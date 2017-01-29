var NumbersFrame = React.createClass({

  render: function () {

    var numbers = [],
        selectNumber = this.props.selectNumber,
        usedNumbers = this.props.usedNumbers,
        selectedNumbers = this.props.selectedNumbers,
        className;

    for (var i = 1; i <= 9; i++) {

      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      className += " used-" + (usedNumbers.indexOf(i) >= 0);

      numbers.push(
          <div className={className} onClick={selectNumber.bind(null, i)}>
            {i}
          </div>
      );
    }

    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    );
  }
});
