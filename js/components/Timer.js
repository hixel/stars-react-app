var Timer = React.createClass({

  componentDidMount: function () {

    this.props.startTimer();
  },

  componentDidUnmount: function() {

     this.props.stopTimer();
  },

  render: function () {

    return (
      <div className="timer">
        {this.props.expiration}
      </div>
    )
  }
});
