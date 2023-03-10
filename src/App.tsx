import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/sign-in/SignIn";
import SignUpCafe from "./pages/sign-up-cafe/SignUpCafe";
import SignUpClient from "./pages/sign-up-client/SignUpClient";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/sign-up-client" element={<SignUpClient />} />
                <Route path="/sign-up-cafe" element={<SignUpCafe />} />
                <Route path="/sign-in" element={<SignIn/>} />
            </Routes>
        </div>
    )
}

export default App;