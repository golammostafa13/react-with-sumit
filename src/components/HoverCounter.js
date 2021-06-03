/* eslint-disable react/button-has-type */
import withCounter from './withCounter';

function HoverCounter({ count, incrementCounter }) {
    // eslint-disable-next-line react/button-has-type
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    return <button onMouseOver={incrementCounter}>Hovered {count} times </button>;
}
export default withCounter(HoverCounter);
