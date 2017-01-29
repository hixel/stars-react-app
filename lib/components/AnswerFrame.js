var AnswerFrame = React.createClass({
  displayName: "AnswerFrame",


  render: function () {

    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function (i) {

      return React.createElement(
        "span",
        { onClick: props.unselectNumber.bind(null, i) },
        i
      );
    });

    return React.createElement(
      "div",
      { id: "answer-frame" },
      React.createElement(
        "div",
        { className: "well" },
        selectedNumbers
      )
    );
  }
});