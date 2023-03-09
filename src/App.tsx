import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/sign-up/SignUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default App;