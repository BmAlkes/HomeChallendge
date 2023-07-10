import styled from "styled-components";

export const HomeComponent = styled.main`
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
