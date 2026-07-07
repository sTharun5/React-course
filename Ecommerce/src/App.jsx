 import HomePage from "./pages/HomePage";
 import { Checkout } from "./pages/Checkout";
 import { Route } from "react-router";
 import { Routes } from "react-router";

 function App(){
    return(
        <>
            <Routes>
             <Route path="/" element= {<HomePage/>}></Route>
             <Route path="/Checkout" element = {<Checkout/>}></Route>
            </Routes>

        </>
    );
}

export default App;
