/* eslint-disable react/no-unused-state */
import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convertTo, toCelcius, toFahrenheit } from './lib';
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
        const { temperature, scale } = this.state;
        const celecius = scale === 'f' ? convertTo(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? convertTo(temperature, toFahrenheit) : temperature;

        return (
            <>
                <TemperatureInput
                    scale="c"
                    temperature={celecius}
                    onChangeInput={this.handleInput}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onChangeInput={this.handleInput}
                />
                <BoilingVerdict temperature={parseFloat(temperature)} />
            </>
        );
    }
}
