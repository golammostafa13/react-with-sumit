import withCounter from './withCounter';

function ClickCounter({ count, incrementCounter }) {
    // eslint-disable-next-line react/button-has-type
    return <button onClick={incrementCounter}>Clicked {count} times </button>;
}
export default withCounter(ClickCounter);
