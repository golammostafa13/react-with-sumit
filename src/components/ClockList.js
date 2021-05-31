import Clock from './Clock';

function ClockList({ quantities = [1, 2, 3] }) {
    return (
        <>
            {quantities.map((key) => (
                <Clock key={key} />
            ))}
        </>
    );
}
export default ClockList;
