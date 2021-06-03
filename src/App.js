// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Emoji from './components/Emoji';
// import Text from './components/Text';

import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
// import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

// import Calculator from './components/Calculator';

// import TemperatureInput from './components/TemperatureInput';

function App() {
    return (
        <div>
            {/* <ClockList /> */}
            {/* <Form /> */}
            {/* <Calculator /> */}
            {/* <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji> */}
            {/* <ClickCounter /> */}
            {/* <HoverCounter /> */}
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
