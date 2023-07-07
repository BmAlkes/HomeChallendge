import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:5000",
});

export const createSession = async (email, password) => {
    return api.post("/auth/login", { email, password });
};

export const createUser = async (name, email, password) => {
    return api.post("/auth/register", { name, email, password });
};
