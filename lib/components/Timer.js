var Timer = React.createClass({
  displayName: "Timer",


  componentDidMount: function () {

    this.props.startTimer();
  },

  componentDidUnmount: function () {

    this.props.stopTimer();
  },

  render: function () {

    return React.createElement(
      "div",
      { className: "timer" },
      this.props.expiration
    );
  }
});