export const NamesList = () => {
    const names = ["Bruce", "Clark", "Diana", "Bruce"];
    const items = names.map((name, idx) => (<h2 key={idx}>{idx}, {name}</h2>));
    return <div>{items}</div>;
}