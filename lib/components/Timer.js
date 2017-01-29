var Timer = React.createClass({
  displayName: "Timer",


  componentDidMount: function () {

    this.props.startTimer();
  },

  render: function () {

    return React.createElement(
      "div",
      { className: "timer" },
      this.props.expiration
    );
  }
});