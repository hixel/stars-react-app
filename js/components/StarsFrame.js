var StarsFrame = React.createClass({

  render: function () {

    var stars = [],
        color;

    for (var i = 0; i < this.props.numberOfStars; i++) {
      
      color = {
        color: randomColor()
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