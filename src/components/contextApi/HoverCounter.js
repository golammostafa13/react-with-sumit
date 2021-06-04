/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/button-has-type */
function HoverCounter({ count, incrementCount, theme }) {
    // eslint-disable-next-line react/button-has-type
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    console.log(theme);
    return (
        <h1 style={{ background: theme, color: 'white' }} onMouseOver={incrementCount}>
            Hovered {count} times
        </h1>
    );
}
export default HoverCounter;
