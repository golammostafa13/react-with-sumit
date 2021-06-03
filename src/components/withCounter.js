import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewCompenent extends React.Component {
        state = {
            count: 0,
        };

        incrementCounter = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponent count={count} incrementCounter={this.incrementCounter} />;
        }
    }
    return NewCompenent;
};
export default withCounter;
