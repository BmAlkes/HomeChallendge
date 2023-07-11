import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1255&q=80");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 560px;
    padding: 20px;
    border-radius: 1rem;
    backdrop-filter: blur(16px);
    -webkit-webdrop-filter: blur(16px);
    border: 2px solid rgba(255, 255, 255, 0.2);
`;
export const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;

    input {
        outline: none;
        background-color: transparent;
        color: #fff;
        width: 100%;
        height: 48px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        padding: 1rem;
        font-size: 1rem;
    }
    input:focus {
        border: 2px solid rgba(255, 255, 255, 0.7);
    }
    input::placeholder {
        color: #ccc;
    }

    p {
        color: red;
    }

    button {
        border: none;
        outline: none;
        width: 100%;
        height: 48px;
        border-radius: 1rem;
        font-size: 18px;
        background-color: #1e90ff;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &:hover {
            background-color: #147be2;
        }
    }

    a {
        font-size: 1.3rem;
        color: #fff;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            color: rgba(255, 255, 255, 0.7);
        }
    }
`;
export const Divider = styled.div`
    display: block;
    width: 80%;
    height: 1px;
    background-color: #fff;
`;
