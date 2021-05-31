/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale } = this.props;
        return <button onClick={() => change(locale)}>Click here</button>;
    }
}
export default Button;
