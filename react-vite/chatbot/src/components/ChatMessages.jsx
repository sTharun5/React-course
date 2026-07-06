import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import '../App.css'

function ChatMessages({ curr , useref , isTop}) {

     useEffect(() => {
        const element = useref.current;

        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [curr, isTop, useref]);

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
