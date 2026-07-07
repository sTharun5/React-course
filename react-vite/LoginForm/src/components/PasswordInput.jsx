import { useState } from "react";
import './PasswordInput.css'
function PasswordInput() {
    const [show, setShow] = useState(false);
    const [isThere, setIsThere] = useState(false);

    return (
        <div className="pass-container">
            <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="pass-input"
                onChange={(event) => {
                    setIsThere(event.target.value.length > 0);
                }}
            />

            {isThere && (
                <button
                    className="pass-button"
                    onClick={() => setShow(!show)}
                >
                    {show ? "Hide" : "Show"}
                </button>
            )}
        </div>
    );
}

export default PasswordInput;
