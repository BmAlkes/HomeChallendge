import React, { useContext } from "react";
import { BoxLogin, Divider, Form, LoginContainer, Title } from "./styled";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/auth";

const loginFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
        .string()
        .max(15, { message: "Must be 5 or fewer characters long" })
        .min(5, { message: "Must be 5 or more characters long" }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

const Register = () => {
    const { newUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginForm>({ resolver: zodResolver(loginFormSchema) });

    const handleNewLogin = (data: LoginForm) => {
        console.log("create user");
        newUser(data);
    };
    return (
        <LoginContainer>
            <BoxLogin>
                <Title>Register User</Title>
                <Form onSubmit={handleSubmit(handleNewLogin)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                    />
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
                        Register
                        <BiLogIn size={24} />
                    </button>
                    <Divider />
                    <Link to="/login">Login Page</Link>
                </Form>
            </BoxLogin>
        </LoginContainer>
    );
};

export default Register;
