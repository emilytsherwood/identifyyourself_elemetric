var React = require('react');

class Main extends React.Component{
  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.props.children}
        <LandingPage />
      </div>
    );
  }
}

export { Main };

