export default function TemperatureInput({ temperature, scale, onChangeInput }) {
    return (
        <fieldset>
            <legend>Temperature Input in {scale}</legend>
            <input type="number" value={temperature} onChange={(e) => onChangeInput(e, scale)} />
        </fieldset>
    );
}
