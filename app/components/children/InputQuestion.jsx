var React = require('react');

var InputQuestion = React.createClass({
    render: function() {
        return ( 
        <div>
        <h2>Basic Information</h2>
        <ul className="form-fields">
            <li>
            <label>What is your Name?</label>
            <input type="text"
                   ref="name"
                   defaultValue = {this.props.answers.name} />
            </li>
            <li>
            <label>What is your Nickname?</label>
            <input type="text"
                   ref="nickname"
                   defaultValue = {this.props.answers.nickname} />
            </li>
            <button className="btn-primary" onClick = {this.nextQuestion}> Proceed </button>
            </ul>
            </div>
            )
        },

 saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      nickname : this.refs.nickname.getDOMNode().value,
    }

    this.props.saveAnswers(data)
    this.props.nextQuestion()
  }
})

module.exports = InputQuestion;
