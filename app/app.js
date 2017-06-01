//  Including Dependencies
var React = require('react');

var Main = require ('./components/Main');
var LandingPage = require('./components/children/LandingPage');
var InputQuestion = require('./components/children/InputQuestion');
var PicQuestion = require('./components/children/PicQuestion');
var MultiQuestion = require('./components/children/MultiQuestion');
var DisplayAnswers = require('./components/children/DisplayAnswers');
var assign = require('object-assign');

var answers = {
    name : null,
    nickname : null,
    lego : null,
    superpowers : []
}

var Main = React.createClass({
    // The Initial State is Step 1
    // Step 1 is the Landing Page
    getInitialState: function() {
        return {
            step: 1
        }
    },

// Setting up my back and forth functions
    saveAnswers: function(answer_value) {
        return function() {
            answers = assign({}, answers, answer_value)
        }.bind(this)()
    },

    nextQuestion: function() {
        this.setState({
            step: this.state.step + 1
        })
    },
    // Decreasing a step
    previousQuestion: function() {
        this.setState({
            step: this.state.step - 1
        })
    },

    render: function() {
        // When the page is loaded, the first component will be the Landing Page (Step 1)
        switch (this.state.step) {
            case 1: 
                return <LandingPage answers = {answers}
                                    nextQuestion = {this.nextQuestion} />
            case 2: 
                return <InputQuestion answers = {answers}
                                      nextQuestion = {this.nextQuestion}
                                      saveAnswers = {this.saveAnswers} />
            case 3:
                return <PicQuestion answers = {answers}
                                    nextQuestion = {this.nextQuestion}
                                    previousQuestion = {this.previousQuestion} 
                                    saveAnswers = {this.saveAnswers} />
            case 4:
                return <MultiQuestion answers = {answers}
                                      nextQuestion = {this.nextQuestion}
                                      previousQuestion = {this.previousQuestion}
                                      saveAnswers = {this.saveAnswers} />
            case 5:
                return <DisplayAnswers answers = {answers} />
        }
    }
})

module.exports = Main;





// var React = require('react');
// var ReactDOM = require('react-dom');
// import { hashHistory, Router } from 'react-router';
// var Main = require('./components/Main');
// var LandingPage = require('./components/children/LandingPage');

// const where = document.getElementById('app');

// ReactDOM.render(
//     <LandingPage />,
//     document.getElementById('app')
// )


// window.onload = function() {
//   React.render(
//     <LandingPage />,
//     document.getElementById('app')
//   )
// }