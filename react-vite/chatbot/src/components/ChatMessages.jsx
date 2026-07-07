import { useEffect , useRef} from "react";
import ChatMessage from "./ChatMessage";
import './ChatMessages.css'

function useAutoScroll(dependencies){
    const useref = useRef(null);
    useEffect(()=>{
    if(useref.current){
        useref.current.scrollTop = useref.current.scrollHeight;
    }
},[dependencies])
return useref;
}

function ChatMessages({ curr }) {
            const useref = useAutoScroll(curr);
            return (
                <div className="chat-messages-container" ref={useref}>
                    {curr.map((chatmessage) => {
                        return (
                            <ChatMessage
                                key={chatmessage.key}
                                message={chatmessage.message}
                                sender={chatmessage.sender}
                            />
                        );
                    })}
                </div>
            );
        }

    export default ChatMessages;
