import {
    BrowserRouter,
    Navigate,
    Route,
    Router,
    Routes,
    useNavigate,
} from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { AutContext, AuthContext } from "./context/auth";

interface ReactProps {
    children: React.ReactElement;
}

function App() {
    const { isAutheticated } = useContext(AuthContext);
    console.log(isAutheticated);
    const Private: React.FC<ReactProps> = ({ children }) => {
        if (!isAutheticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <>
            <BrowserRouter>
                <AutContext>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/"
                            element={
                                <Private>
                                    <DefaultLayout />
                                </Private>
                            }
                        >
                            <Route path="/home" element={<Home />} />
                        </Route>
                    </Routes>
                </AutContext>
            </BrowserRouter>
        </>
    );
}

export default App;
