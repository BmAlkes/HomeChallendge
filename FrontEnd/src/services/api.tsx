import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (email: string, password: string) => {
    return api.post("/auth/login", { email, password });
};

export const createUser = async (
    name: string,
    email: string,
    password: string
) => {
    return api.post("/auth/register", { name, email, password });
};
