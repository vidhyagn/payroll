import React, {Component} from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div className="flex-center">
                <div className="error-block">
                    <h1>404</h1>
                    <p>Page Not Found !</p>
                </div>
            </div>
        );
    }
}

export default NoMatch;
