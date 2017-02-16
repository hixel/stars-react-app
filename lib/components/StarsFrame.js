var StarsFrame = React.createClass({
  displayName: "StarsFrame",


  shouldComponentUpdate: function (nextProps) {

    return nextProps.refreshStarsFrame;
  },

  render: function () {

    var stars = [],
        color;

    for (var i = 0; i < this.props.numberOfStars; i++) {

      color = {
        color: randomColor({
          luminosity: 'bright'
        })
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