import React, { PropTypes } from 'react';
import './style.less';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img src="img/logo.png" />
                        </a>
                    </div>
                </div>
            </nav>
        );
    }

}

Navbar.propTypes = {
//    onAddSubreddit: PropTypes.func.isRequired,
};


export default Navbar;
