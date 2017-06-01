// Including dependencies
var React = require('react');

class LandingPage extends React.Component{
    render() {
        return (
    <header className="main-header" id="header">
        <div className="bg-color">
            {/*<!--nav-->*/}
            <nav className="nav navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="col-md-12">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" aria-controls="navbar">
                            <span className="fa fa-bars"></span>
                        </button>
                            <a href="index.html" className="navbar-brand">Survey</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/*<!--/ nav-->*/}
            <div className="container text-center">
                <div className="wrapper wow fadeInUp delay-05s" >
                    <h3 className="title">Identify Yourself</h3>
                    <h4 className="sub-title">A Simple Survey</h4>
                    <button type="submit" className="btn btn-submit">Begin Survey</button>
                </div>
            </div>
        </div>
    </header> 
        );
    }
}

export { LandingPage };