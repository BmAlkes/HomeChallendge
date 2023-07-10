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
import { NoteContext, NoteContextComponent } from "./context/note";

interface ReactProps {
    children: React.ReactElement;
}

function App() {
    const Private: React.FC<ReactProps> = ({ children }) => {
        const { isAutheticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Loading...</div>;
        }
        if (!isAutheticated) {
            return <Navigate to="/login" />;
        } else {
            return children;
        }
    };

    return (
        <>
            <BrowserRouter>
                <AutContext>
                    <NoteContextComponent>
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
                                <Route path="/" element={<Home />} />
                            </Route>
                        </Routes>
                    </NoteContextComponent>
                </AutContext>
            </BrowserRouter>
        </>
    );
}

export default App;
