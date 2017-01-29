var Timer = React.createClass({

  componentDidMount: function () {

    this.props.startTimer();
  },

  render: function () {

    return (
      <div className="timer">
        {this.props.expiration}
      </div>
    )
  }
});
