import styled from "styled-components";

export const HeaderComponent = styled.header`
    background: ${(props) => props.theme.primary};
    height: 90px;
    width: 100%;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.white};

    div h3 {
        font-size: 1.5rem;
        padding: 0.5rem;
        letter-spacing: 0.2rem;
    }
    .UserArea {
        width: 240px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        button {
            margin-top: 0.5rem;
            padding: 0.3rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            background-color: ${(props) => props.theme.button};
            color: ${(props) => props.theme.white};
            &:hover {
                background: ${(props) => props.theme.hover};
            }
        }
    }
`;
