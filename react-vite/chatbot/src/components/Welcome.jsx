import './Welcome.css'
function Welcome({curr}){
    return(
        <div className="welcome">
            {curr.length==0 && (<div className="head">chatbot welcomes you</div>)}
        </div>
    );
}

export default Welcome;
