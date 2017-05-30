// Including Dependencies
var React = require('react');

var LandingPage = require('./LandingPage');
var InputQuestion = require('./InputQuestion');
var PicQuestion = require('./PicQuestion');
var MultiQuestion = require('./MultiQuestion');

var Main = React.createClass({
    // The Initial State is Step 1
    // Step 1 is the Landing Page
    getInitialState: function() {
        return {
            step: 1
        }
    },

    render: function() {
        // When the page is loaded, the first component will be the Landing Page (Step 1)
        switch (this.state.step) {
            case 1: 
                return <LandingPage />
            case 2: 
                return <InputQuestion />
            case 3:
                return <PicQuestion />
            case 4:
                return <MultiQuestion />
        }
    }
})