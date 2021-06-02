export default function Text({ addEmoji }) {
    const text = 'This is javascript lover';
    return <div>{addEmoji ? addEmoji(text, ':)') : text}</div>;
}
