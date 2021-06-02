export function toCelcius(temperature) {
    return ((temperature - 32) * 5) / 9;
}
export function toFahrenheit(temperature) {
    return (temperature * 9) / 5 + 32;
}
export function convertTo(temperature, toConvert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = toConvert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
