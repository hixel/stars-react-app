var StarsFrame = React.createClass({
  displayName: "StarsFrame",


  render: function () {

    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {

      stars.push(React.createElement("span", { className: "glyphicon glyphicon-star" }));
    }

    return React.createElement(
      "div",
      { id: "stars-frame" },
      React.createElement(
        "div",
        { className: "well" },
        stars
      )
    );
  }
});