/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale, show } = this.props;
        // if (!enable) return null;
        return (
            <>
                <button onClick={() => change(locale)}>Click here</button>
                {show && <p>Show me or not show me</p>}
            </>
        );
    }
}
export default Button;
