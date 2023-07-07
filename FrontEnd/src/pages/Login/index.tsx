import React from "react";
import { BoxLogin, Divider, Form, LoginContainer, Title } from "./styled";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <LoginContainer>
            <BoxLogin>
                <Title>Login</Title>
                <Form>
                    <input type="email" name="email" placeholder="Email" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                    />
                    <button type="submit"> Enter</button>
                    <Divider />
                    <Link to="/register">Register</Link>
                </Form>
            </BoxLogin>
        </LoginContainer>
    );
};

export default Login;
