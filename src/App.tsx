import { Route, Routes } from "react-router-dom";
import "./App.css";
import Delivery from "./pages/delivery/Delivery";
import Basket from "./pages/basket/Basket";
import HomePage from "./pages/home-page/HomePage";
import Ordering from "./pages/ordering/Ordering";
import SignIn from "./pages/sign-in/SignIn";
import SignUpCafe from "./pages/sign-up-cafe/SignUpCafe";
import SignUpClient from "./pages/sign-up-client/SignUpClient";
import Cafe from "./pages/cafe/Cafe";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/ordering" element={<Ordering />} />
                <Route path="/sign-up-client" element={<SignUpClient />} />
                <Route path="/sign-up-cafe" element={<SignUpCafe />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/cafe" element={<Cafe />} />
            </Routes>
        </div>
    )
}

export default App;