import "./App.css";
import { Route, Routes } from "react-router-dom";
import Delivery from "./pages/delivery/Delivery";
import Basket from "./pages/basket/Basket";
import HomePage from "./pages/home-page/HomePage";
import Ordering from "./pages/ordering/Ordering";
import SignIn from "./pages/sign-in/SignIn";
import SignUpCafe from "./pages/sign-up-cafe/SignUpCafe";
import SignUpClient from "./pages/sign-up-client/SignUpClient";
import { useEffect } from "react";
import { setToken } from "./api/api";
import { useAppDispatch } from "./hooks/hooks";
import { getUser } from "./store/reducers/user/userAction";
import Cookies from "js-cookie";

function App() {
    const dispatch = useAppDispatch();
    const token = Cookies.get("token") || null

    const handleGetUser = async () => { 
        setToken();
        token && dispatch(getUser());
    };

    useEffect(() => {
        handleGetUser()
    }, []);

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
