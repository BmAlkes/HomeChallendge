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

export const createNote = async (
    title: string,
    description: string,
    created_by: string
) => {
    return api.post("/notes", { title, description, created_by });
};

export const getAllNotes = async () => {
    return api.get("/notes");
};
