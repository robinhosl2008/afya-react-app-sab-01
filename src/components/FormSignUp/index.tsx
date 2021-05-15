import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from "react-router-dom";
import { CardContent } from './styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from "../../service/api";


interface IFormPostData{
    nome: string;
    login: string;
    cpf: string;
    senha: string;
}

const Form: React.FC = () => {
    const [ formDataContent, setFormDataContent ] = 
    useState<IFormPostData>({} as IFormPostData);

    const [ isLoad, setIsLoad ] = useState<boolean>
    (false)

    const history = useHistory();

    const postSignUpDAta = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsLoad(!isLoad);

            api
            .post("usuarios", formDataContent)
            .then((response) => {
                toast.success("Cadastro realizado com sucesso!");

                setTimeout( () => {
                    history.push('/login');
                }, 1500);
            })
            .catch((err) => {
                toast.error("Ooops, falha no engano!");
            }).finally( () => setIsLoad(false));
        }, [formDataContent, isLoad, history]
    );

    return (
        <>
            {isLoad ? 
                (
                    <CardContent>
                        <p>Carregando ...</p>
                    </CardContent>
                ) : (
                    <CardContent>
                        <h3>Crie sua conta</h3>
                        <form onSubmit={postSignUpDAta}>
                            <input type="text" placeholder="Nome completo" 
                            onChange={e => {setFormDataContent({ ... formDataContent, nome: e.target.value})}} />
                            <input type="text" placeholder="Nome de usuário" 
                            onChange={e => {setFormDataContent({ ... formDataContent, login: e.target.value})}} />
                            <input type="text" placeholder="CPF" 
                            onChange={e => {setFormDataContent({ ... formDataContent, cpf: e.target.value})}} />
                            <input type="password" placeholder="password" 
                            onChange={e => {setFormDataContent({ ... formDataContent, senha: e.target.value})}} />
                            <button type="submit">Enviar</button>
                        </form>
                    </CardContent>
                )
            }
        </>
    );
}

export default Form;