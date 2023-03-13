import "./App.css";
import Delivery from "./components/Delivery";
import HomePage from "./pages/home-page/HomePage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Delivery />
            <HomePage/>
            <Footer />
        </div>
    )
}

export default App;