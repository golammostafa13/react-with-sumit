/* eslint-disable react/no-unused-state */
import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: '',
    };

    handleInput = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature } = this.state;
        return (
            <>
                <TemperatureInput scale="c" onChangeInput={this.handleInput} />
                <TemperatureInput scale="f" onChangeInput={this.handleInput} />
                <BoilingVerdict temperature={temperature} />
            </>
        );
    }
}
