import Loader from "./Loader";
import robotProfile from '../assets/robot.png'
import userProfile from '../assets/user.png'
import '../App.css'

function ChatMessage({ message, sender }) {
            return (
                <div className={sender === 'robot' ? 'chat-messenger-robot' : 'chat-messenger-user'}>
                    {sender === 'robot' && (
                        <img src={robotProfile} alt="robot image" width="50" className="chat-message-profile" />
                    )}

                    <div className="chat-message-text">
                        {message == "waiting..." ? (<Loader />) : message}
                    </div>
                    {sender === 'user' && (
                        <img src={userProfile} alt="user image" width="50" className="chat-message-profile" />
                    )}
                </div>
            );
        }

    export default ChatMessage;
