import './Footer.css'

function Footer({isTop , setIsTop}) {

    function changeCss() {
        setIsTop(!isTop);
    }
    return (
        <div className="footer">
            <div onClick={changeCss}>
                {isTop ? "Hello, Chatbot welcomes you! click here to move to bottom" : "Hello, Chatbot welcomes you! click here to  move to top"}
            </div>
        </div>
    );
}
export default Footer;
