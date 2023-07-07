import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<DefaultLayout />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
