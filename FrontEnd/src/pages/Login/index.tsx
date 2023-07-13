import React, { useContext } from "react";
import { BoxLogin, Divider, Form, LoginContainer, Title } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/auth";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const newHandleLogin = (data: any) => {
        console.log(data);
        loginUser(data);
        navigate("/");
    };

    console.log(errors?.password);

    return (
        <LoginContainer>
            <BoxLogin>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit(newHandleLogin)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors?.email?.type === "invalid_string" && (
                        <p>email is not valid</p>
                    )}
                    <input
                        type="password"
                        placeholder="Your Password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 15,
                        })}
                    />
                    {errors?.password?.type === "too_small" && (
                        <p>{"Must be 5 or more characters long"}</p>
                    )}
                    {errors?.password?.type === "too_big" && (
                        <p>{"Must be 5 or fewer characters long"}</p>
                    )}

                    <button type="submit">
                        Enter
                        <BiLogIn size={24} />
                    </button>
                    <Divider />
                    <Link to="/register">Register</Link>
                </Form>
            </BoxLogin>
        </LoginContainer>
    );
};

export default Login;
