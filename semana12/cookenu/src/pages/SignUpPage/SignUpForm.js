import React from "react";
import { ImputsContainer, SignFormContainer } from "./styled";
import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/user";

const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)
    }
    return (
        <form onSubmit={onSubmitForm}>
            <SignFormContainer>
                <ImputsContainer>
                    <TextField
                        value={form.name}
                        name={"name"}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />
                    <TextField
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </ImputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Fazer Cadastro
                </Button>
            </SignFormContainer>
        </form>
    )
}

    export default SignUpForm