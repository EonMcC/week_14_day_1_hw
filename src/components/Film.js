import React, {Component} from 'react';

class Film extends Component {
    render() {
        return (
        <div className="film">
            <a href={this.props.url}><h4>{this.props.children}</h4></a>
        </div>
        )}
}

export default Film;