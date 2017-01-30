var StarsFrame = React.createClass({
  displayName: "StarsFrame",


  render: function () {

    var stars = [],
        color;

    for (var i = 0; i < this.props.numberOfStars; i++) {

      color = {
        color: randomColor()
      };

      stars.push(React.createElement("span", { className: "glyphicon glyphicon-star", style: color }));
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