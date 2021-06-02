export default function BoilingVerdict({ temperature }) {
    if (temperature >= 100) {
        return <p>Water would boil</p>;
    }
    return <p>Water would not boil</p>;
}
