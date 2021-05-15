import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import api from "../../service/api";
import { FormSignInContent } from "./styles"

interface IUserLogin {
    usuario: string;
    senha: string;
}

const FormSignIn: React.FC = () => {
    const [ formDataContent, setFormDataContent ] = 
    useState<IUserLogin>({} as IUserLogin);

    const [ isLoad, setIsLoad ] = useState<boolean>
    (false)

    const history = useHistory();

    const loginSubmit = useCallback(
        ( e: FormEvent<HTMLFormElement> ) => {
            e.preventDefault();
            setIsLoad(true);
            api.post('login', formDataContent)
            .then(
                res => {
                    localStorage.setItem('@tokenAfiaApp', res.data.token);
                    toast.success('Login realizado!', {
                        onClose: () => history.push('/painel')
                    });
                }
            )
            .catch( err => toast.error('Ooops, algo deu errado!'))
            .finally( () => setIsLoad(false) )
        }, [formDataContent, history]
    )

    return(
        <>
        {isLoad ? 
            (
                <FormSignInContent>
                    <p>Carregando ...</p>
                </FormSignInContent>
            ) : (
                <FormSignInContent>
                    <form onSubmit={loginSubmit}>
                        <input type="text" placeholder="Usuário" onChange={ e => setFormDataContent({ ... formDataContent, usuario: e.target.value })} />
                        <input type="password" placeholder="Senha" onChange={ e => setFormDataContent({ ... formDataContent, senha: e.target.value })} />
                        <button type="submit">Enviar</button>
                    </form>
                </FormSignInContent>
            )
        }
        </>
    );
}

export default FormSignIn;