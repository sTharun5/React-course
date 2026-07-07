import PasswordInput from "./PasswordInput";
import './LoginForm.css'

function LoginForm() {
    return (
        <div className="input-box">
            <input
                type="text"
                placeholder="Email"
                className="input"
            />

            <PasswordInput />
        </div>
    );
}

export default LoginForm;
