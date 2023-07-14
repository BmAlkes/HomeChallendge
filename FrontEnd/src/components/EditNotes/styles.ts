import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(Dialog.Content)`
    min-height: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${(props) => props.theme.primary};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        text-align: center;
        color: ${(props) => props.theme.white};
        margin-bottom: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 350px;

        input {
            border: none;
            width: 100%;
            background-color: ${(props) => props.theme.white};
            padding-right: 20px;
            height: 50px;
            padding-left: 20px;
            margin-bottom: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            resize: none;
            margin-top: 0.5rem;
        }
        button {
            cursor: pointer;
            font-size: 1.2rem;
            background-color: ${(props) => props.theme.button};
            border: none;
            padding-right: 20px;
            height: 50px;
            padding-left: 20px;
            margin-bottom: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            resize: none;
            margin-top: 1.5rem;
            color: ${(props) => props.theme.white};
            &:hover {
                background: ${(props) => props.theme.hover};
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    top: 1.5rem;
    right: 1.5rem;
    color: white;
    cursor: pointer;
    border: none;
`;
