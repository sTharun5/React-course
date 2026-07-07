import Loader from "./Loader";
import robotProfile from '../assets/robot.png'


import './ChatMessage.css'

function ChatMessage({ message, sender ,storeTime}) {
    const userProfile = "https://supersimple.dev/images/profile-1.jpg";


;

            return (
                <div className={sender === 'robot' ? 'chat-messenger-robot' : 'chat-messenger-user'}>
                    {sender === 'robot' && (
                        <img src={robotProfile} alt="robot image" width="50" className="chat-message-profile" />
                    )}

                    <div className="chat-message-text">
                        <div>
                        {message == "waiting..." ? (<Loader />) : message}
                        </div>
                         <p className="time">{storeTime}</p>
                    </div>

                    {sender === 'user' && (
                        <img src={userProfile} alt="user image" width="50" className="chat-message-profile" />
                    )}

                </div>
            );
        }

    export default ChatMessage;
