var ButtonFrame = React.createClass({
  displayName: "ButtonFrame",


  render: function () {

    var disabled = this.props.selectedNumbers.length === 0,
        button,
        correct = this.props.correct;

    switch (correct) {

      case true:
        button = React.createElement(
          "button",
          { className: "btn btn-success btn-lg",
            onClick: this.props.acceptAnswer },
          React.createElement("span", { className: "glyphicon glyphicon-ok" })
        );
        break;

      case false:
        button = React.createElement(
          "button",
          { className: "btn btn-danger btn-lg" },
          React.createElement("span", { className: "glyphicon glyphicon-remove" })
        );
        break;

      default:
        disabled = this.props.selectedNumbers.length === 0;
        button = React.createElement(
          "button",
          { className: "btn btn-primary btn-lg", disabled: disabled,
            onClick: this.props.checkAnswer },
          "="
        );
    }

    return React.createElement(
      "div",
      { id: "button-frame" },
      button,
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "button",
        { className: "btn btn-warning btn-xs",
          onClick: this.props.redraw,
          disabled: this.props.redraws === 0 },
        React.createElement("span", { className: "glyphicon glyphicon-refresh" }),
        "\xA0",
        this.props.redraws
      )
    );
  }
});