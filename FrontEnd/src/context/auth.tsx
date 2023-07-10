import React, { createContext, useEffect, useState } from "react";
import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";
import { createSession, api, createUser } from "../services/api";

interface IUserContext {
    currentUser: User | null;
    isAutheticated: boolean;
    loginUser: (user: User) => void;
    logoutUser: () => void;
    loading: boolean;
    newUser: (user: User) => void;
}

export const AuthContext = createContext<IUserContext>({
    currentUser: null,
    isAutheticated: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loginUser: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logoutUser: () => {},
    loading: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    newUser: () => {},
});

interface UserContextProps {
    children: React.ReactNode;
}

export const AutContext: React.FC<UserContextProps> = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (recoveredUser) {
            setCurrentUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const loginUser = async (user: User) => {
        const response = await createSession(user.email, user.password);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;
        navigate("/");
        setCurrentUser(loggedUser);
    };

    const logoutUser = () => {
        localStorage.removeItem("user");
        api.defaults.headers.Authorization = null;
        setCurrentUser(null);
        navigate("/login");
    };
    const newUser = async (user: User) => {
        const response = await createUser(user.name, user.email, user.password);
        navigate("/");
    };
    return (
        <AuthContext.Provider
            value={{
                isAutheticated: !!currentUser,
                currentUser,
                loginUser,
                logoutUser,
                loading,
                newUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
