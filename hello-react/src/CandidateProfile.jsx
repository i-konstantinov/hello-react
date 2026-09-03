export const CandidateProfile = () => {

    const name = "Peter Parker";
    const role = "Web Developer";
    const yearsOfExp = 4;
    const isAvailable = true;

    return (<div className="card">
        <h2>{name}</h2>
        <p>{role} with {yearsOfExp} years of experience</p>
        <p>Started in {2025 - yearsOfExp}</p>
        <p>Status: {isAvailable ? 'Available for hire': 'not available'}</p>
        <p>Contact: {name.toLowerCase().replace(" ", ".")}@email.com</p>
    </div>);
}