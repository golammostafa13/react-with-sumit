function ClickCounter({ count, incrementCount }) {
    // eslint-disable-next-line react/button-has-type
    return <button onClick={incrementCount}>Clicked {count} times </button>;
}
export default ClickCounter;
