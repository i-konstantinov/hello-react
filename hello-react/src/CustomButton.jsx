export const CustomButton = ({ text, onClick }) => {
    const handleClick = (event) => {
        console.log("Clicked element", event.target);
        console.log("Click coords:", event.clientX, event.clientY);
        // console.log(`Used ${event.button ? "right":"left"} mouse button`)

        alert(`Hey you clicked on "${text}"`);
        onClick();
    }
    return <button onClick={handleClick}>{text}</button>
}