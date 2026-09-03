import { useState } from "react"

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [msg, setMsg] = useState("");

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    const handleChange = (event) => {
        setMsg(event.target.value);
    }

    return (
        <div className="card">
            <button onClick={handleLogin}>{isLoggedIn ? "Logout":"Login"}</button>
            <div>
                <input className="form-input" type="text" placeholder="Type a message" value={msg} onChange={handleChange} />
                <p>{msg}</p>
            </div>
        </div>
    )
}