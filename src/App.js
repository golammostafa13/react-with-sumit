// import ClockList from './components/ClockList';
// import Form from './components/Form';

import Emoji from './components/Emoji';
import Text from './components/Text';

// import Calculator from './components/Calculator';

// import TemperatureInput from './components/TemperatureInput';

function App() {
    return (
        <div>
            {/* <ClockList /> */}
            {/* <Form /> */}
            {/* <Calculator /> */}
            <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji>
        </div>
    );
}

export default App;
