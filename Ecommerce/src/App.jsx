 import HomePage from "./pages/HomePage";
 import { Checkout } from "./pages/Checkout/Checkout";
 import { Route } from "react-router";
 import { Routes } from "react-router";
 import { Orders } from "./pages/Orders";
 import { Tracking } from "./pages/Tracking";
 import { PageNotFound } from "./pages/PageNotFound";

 function App(){
    return(
        <>

            <Routes>
             <Route path="/" element= {<HomePage/>}></Route>
             <Route path="/Checkout" element = {<Checkout/>}></Route>
             <Route path="/Orders" element = {<Orders/>}></Route>
             <Route path="/Tracking" element = {<Tracking></Tracking>}></Route>
             <Route path="*" element= {<PageNotFound/>}></Route>
            </Routes>

        </>
    );
}

export default App;
