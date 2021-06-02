const scaleNames = {
    c: 'celecius',
    f: 'fahrenheit',
};
export default function TemperatureInput({ temperature, scale, onChangeInput }) {
    return (
        <fieldset>
            <legend>Temperature Input in {scaleNames[scale]}</legend>
            <input type="number" value={temperature} onChange={(e) => onChangeInput(e, scale)} />
        </fieldset>
    );
}
