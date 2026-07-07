import { useState , useRef } from 'react'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import Footer from './components/Footer';
import Welcome from './components/Welcome'

import './App.css'

function App() {
            const [curr, updateFunc] = useState([]);
            const [isLoading, setIsLoading] = useState(false);
            const [isTop , setIsTop] = useState(false);
            const useref = useRef(null);
            const refer = useRef(null);


            return (
                <>

                <div className="chatbot-container">
                     <Welcome curr={curr}></Welcome>

                    <div className={isTop ? "chatbot-box-top" : "chatbot-box" } ref={refer}>


                        <ChatMessages curr={curr}  useref={useref} isTop = {isTop}/>
                        <ChatInput
                            curr={curr}
                            updateFunc={updateFunc}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />

                    </div>
                    <Footer isTop = {isTop} setIsTop ={setIsTop} />
                </div>
                </>
            );
        }

export default App
