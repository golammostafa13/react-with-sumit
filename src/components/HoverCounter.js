/* eslint-disable react/button-has-type */
function HoverCounter({ count, incrementCount }) {
    // eslint-disable-next-line react/button-has-type
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    return <button onMouseOver={incrementCount}>Hovered {count} times </button>;
}
export default HoverCounter;
