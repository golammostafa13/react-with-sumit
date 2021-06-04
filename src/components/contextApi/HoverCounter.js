/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/button-has-type */
function HoverCounter({ count, theme, switchTheme, incrementCount }) {
    // eslint-disable-next-line react/button-has-type
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    return (
        <div>
            <h1 style={{ background: theme, color: 'red' }} onMouseOver={incrementCount}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Switch Theme
            </button>
        </div>
    );
}
export default HoverCounter;
