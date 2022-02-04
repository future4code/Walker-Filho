import React from "react";
import {ScreenContainer, LogoImage, SignUpBottonContainer} from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
                <LoginForm/>
            <SignUpBottonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}  
                    margin={"normal"}
                >
                    Cadastre-se
                </Button>
            </SignUpBottonContainer>
        </ScreenContainer>
    )
}

export default LoginPage