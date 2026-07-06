import {  useState  } from 'react';
import {Chatbot} from 'supersimpledev'
import '../App.css'



function ChatInput({ curr, updateFunc, isLoading, setIsLoading }) {
            const [currText, setCurrText] = useState('');

            function getText(event) {
                setCurrText(event.target.value);
            }

            async function sendMessage() {
                if (isLoading == true) return;
                const text = currText;
                if (text.length == 0) return;
                setCurrText('');

                const store = [
                    ...curr,
                    {
                        message: text,
                        sender: 'user',
                        key: crypto.randomUUID(),
                    },
                ];
                updateFunc(store);

                updateFunc([
                    ...store,
                    {
                        message: 'waiting...',
                        sender: 'robot',
                        key: crypto.randomUUID(),
                    },
                ]);

                console.log('waiting...');
                let response;

                setIsLoading(true);
                // Chatbot.getResponse(currText) no latency
                try {
                    response = await Chatbot.getResponseAsync(text);
                } catch (err) {
                    console.log(err)
                    response = 'Sorry, something went wrong.';
                } finally {
                    setIsLoading(false);
                }

                updateFunc([
                    ...store,
                    {
                        message: response,
                        sender: 'robot',
                        key: crypto.randomUUID(),
                    },
                ]);
            }

            // onKeyDown is a event... like onChange onClick

            function enterDetect(event) {
                if (event.code == 'Enter') {
                    sendMessage();
                }
                if (event.code == 'Escape') {
                    setCurrText('');
                }
            }

            return (
                <div className="chat-input-container">
                    <input
                        type="textbox"
                        placeholder="send a message to the chatbot"
                        size="30"
                        onChange={getText}
                        value={currText}
                        onKeyDown={enterDetect}
                        disabled={isLoading}
                        className="chat-input"
                    />

                    <button
                        onClick={sendMessage}
                        disabled={isLoading}
                        className="send-button"
                    >
                        send
                    </button>

                </div>
            );
        }

        export default ChatInput;
