import { Route, Routes } from "react-router-dom";
import "./App.css";
import Delivery from "./components/Delivery";
import Basket from "./pages/basket/Basket";
import HomePage from "./pages/home-page/HomePage";
import SignIn from "./pages/sign-in/SignIn";
import SignUpCafe from "./pages/sign-up-cafe/SignUpCafe";
import SignUpClient from "./pages/sign-up-client/SignUpClient";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/delivery" element={<Delivery />}/>
                <Route path="/basket" element={<Basket />}/>
                <Route path="/sign-up-client" element={<SignUpClient />} />
                <Route path="/sign-up-cafe" element={<SignUpCafe />} />
                <Route path="/sign-in" element={<SignIn/>} />
            </Routes>
        </div>
    )
}

export default App;