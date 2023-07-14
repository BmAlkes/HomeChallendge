import styled from "styled-components";

export const CreateCardComponent = styled.div`
    h2 {
        font-size: 2.4rem;
        letter-spacing: 0.3rem;
        margin: 5rem 0;
        color: ${(props) => props.theme.primary};
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 2rem;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: ${(props) => props.theme.primary};

            input,
            textarea {
                border: none;
                width: 100%;
                color: ${(props) => props.theme.black};
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
