import React from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <IndexLink to="/">Home</IndexLink>
                {' / '}
                <Link to="/about">About</Link>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

export default App;