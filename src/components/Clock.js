/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.clockTime = setInterval(this.tick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.clockTime);
    }

    tick = () => {
        this.setState({ date: new Date() });
    };

    render() {
        return (
            <div>
                <h1>Hello {this.state.date.toLocaleTimeString(this.props.local)}</h1>
            </div>
        );
    }
}
export default Clock;
