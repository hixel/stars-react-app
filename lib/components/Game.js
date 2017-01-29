'use strict';

var possibleCombinationSum = function (arr, n) {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length,
      combinationsCount = 1 << listSize;
  for (var i = 1; i < combinationsCount; i++) {
    var combinationSum = 0;
    for (var j = 0; j < listSize; j++) {
      if (i & 1 << j) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

var Game = React.createClass({
  displayName: "Game",


  getInitialState: function () {

    return {
      numberOfStars: this.randomNumber(),
      selectedNumbers: [],
      usedNumbers: [],
      redraws: 5,
      correct: null,
      doneStatus: null,
      expiration: 60
    };
  },

  resetGame: function () {
    this.replaceState(this.getInitialState());
    this.startTimer();
  },

  randomNumber: function () {

    return Math.floor(Math.random() * 9) + 1;
  },

  selectNumber: function (clickedNumber) {

    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
        correct: null
      });
    }
  },

  unselectNumber: function (clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
        indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({
      selectedNumbers: selectedNumbers,
      correct: null
    });
  },

  sumOfSelectedNumbers: function () {

    return this.state.selectedNumbers.reduce(function (p, n) {
      return p + n;
    }, 0);
  },

  checkAnswer: function () {

    var correct = this.state.numberOfStars === this.sumOfSelectedNumbers();
    this.setState({
      correct: correct
    });
  },

  acceptAnswer: function () {
    var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numberOfStars: this.randomNumber()
    }, function () {
      this.updateDoneStatus();
    });
  },

  redraw: function () {

    if (this.state.redraws > 0) {
      this.setState({
        numberOfStars: this.randomNumber(),
        correct: null,
        selectedNumbers: [],
        redraws: this.state.redraws - 1
      }, function () {
        this.updateDoneStatus();
      });
    }
  },

  possibleSolution: function () {

    var numberOfStars = this.state.numberOfStars,
        possibleNumbers = [],
        usedNumbers = this.state.usedNumbers;

    for (var i = 1; i <= 9; i++) {

      if (usedNumbers.indexOf(i) < 0) {
        possibleNumbers.push(i);
      }
    }

    return possibleCombinationSum(possibleNumbers, numberOfStars);
  },

  updateDoneStatus: function () {
    if (this.state.usedNumbers.length === 9) {

      this.setState({
        doneStatus: "Вы справились!"
      });
      return;
    }

    if (this.state.redraws === 0 && !this.possibleSolution()) {

      this.setState({
        doneStatus: "Игра окончена!"
      });
    }
  },

  startTimer: function () {

    var me = this;

    var timer = setInterval(function () {

      if (me.state.expiration > 0 && me.state.doneStatus === null) {
        var expiration = me.state.expiration - 1;
        me.setState({
          expiration: expiration
        });
      } else {

        me.stopTimer(timer);
      }
    }, 1000);
  },

  stopTimer: function (timer) {

    clearInterval(timer);
    if (this.state.doneStatus === null) {

      this.setState({
        doneStatus: "Время вышло!"
      });
    }
  },

  render: function () {

    var selectedNumbers = this.state.selectedNumbers,
        usedNumbers = this.state.usedNumbers,
        numberOfStars = this.state.numberOfStars,
        redraws = this.state.redraws,
        correct = this.state.correct,
        doneStatus = this.state.doneStatus,
        expiration = this.state.expiration,
        bottomFrame;

    if (doneStatus) {

      bottomFrame = React.createElement(DoneFrame, { doneStatus: doneStatus,
        resetGame: this.resetGame });
    } else {
      bottomFrame = React.createElement(NumbersFrame, { selectedNumbers: selectedNumbers,
        usedNumbers: usedNumbers,
        selectNumber: this.selectNumber });
    }

    return React.createElement(
      "div",
      { id: "game" },
      React.createElement(
        "h2",
        { className: "title" },
        "\u0417\u0432\u0435\u0437\u0434\u044B"
      ),
      React.createElement(Timer, { expiration: expiration, startTimer: this.startTimer }),
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "clearfix" },
        React.createElement(StarsFrame, { numberOfStars: numberOfStars }),
        React.createElement(ButtonFrame, { selectedNumbers: selectedNumbers,
          correct: correct,
          redraws: redraws,
          checkAnswer: this.checkAnswer,
          acceptAnswer: this.acceptAnswer,
          redraw: this.redraw }),
        React.createElement(AnswerFrame, { selectedNumbers: selectedNumbers,
          unselectNumber: this.unselectNumber })
      ),
      bottomFrame
    );
  }
});