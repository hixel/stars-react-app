var DoneFrame = React.createClass({
  displayName: "DoneFrame",


  render: function () {

    return React.createElement(
      "div",
      { className: "well text-center" },
      React.createElement(
        "h2",
        null,
        this.props.doneStatus
      ),
      React.createElement(
        "button",
        { className: "btn btn-default", onClick: this.props.resetGame },
        "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430?"
      )
    );
  }
});