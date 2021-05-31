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
            locale: 'bn-BD',
        };
    }

    componentDidMount() {
        this.clockTime = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTime);
    }

    tick = () => {
        this.setState({ date: new Date() });
    };

    handleClick = (locale) => {
        this.setState({ locale });
        console.log(locale);
    };

    render() {
        const { locale, date } = this.state;

        // let button;
        // if (locale === 'bn-BD') {
        //     button = <Button change={this.handleClick} locale="en-US" />;
        // } else {
        //     button = <Button change={this.handleClick} locale="bn-BD" />;
        // }
        return (
            <div>
                <h1>Hello {date.toLocaleTimeString(locale)}</h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show />
                )}
            </div>
        );
    }
}
export default Clock;
