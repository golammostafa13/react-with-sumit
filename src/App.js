/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Emoji from './components/Emoji';
// import Text from './components/Text';

// import ClickCounter from './components/ClickCounter';
// import Counter from './components/Counter';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

// import Calculator from './components/Calculator';

// import TemperatureInput from './components/TemperatureInput';
import React from 'react';
import Section from './components/contextApi/Section';
import ThemeContext from './components/contextApi/ThemeContext';

export default class App extends React.Component {
    state = {
        theme: 'black',
    };

    switchTheme = () => {
        this.setState(({ theme }) => {
            if (theme === 'black') {
                return { theme: 'white' };
            }
            return { theme: 'black' };
        });
    };

    render() {
        const { theme } = this.state;
        return (
            <div>
                {/* <ClockList /> */}
                {/* <Form /> */}
                {/* <Calculator /> */}
                {/* <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji> */}
                {/* <ClickCounter /> */}
                {/* <HoverCounter /> */}
                {/* <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter> */}
                <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
