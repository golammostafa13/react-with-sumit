/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: 'en-US',
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

    handleClick = (local) => {
        this.setState({ local });
    };

    render() {
        return (
            <div>
                <h1>Hello {this.state.date.toLocaleTimeString(this.state.local)}</h1>
                <Button change={this.handleClick} locale="bn-BD" />
            </div>
        );
    }
}
export default Clock;
