var StarsFrame = React.createClass({

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

      stars.push(
        <span className="glyphicon glyphicon-star" style={color}></span>
      );
    }

    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
      );
  }
});
