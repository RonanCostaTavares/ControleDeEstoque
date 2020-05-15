import React, { useState, useEffect } from 'react';

import Login from './Login';
import Cadastro from './Cadastro';
import RedefinirSenha from './RedefinirSenha';
import Media from './../../media/media.png';
import { Container, DivBtn, Btn, Logo } from './Style';

function Conta(){

    const [change, setChange] = useState(true);
    const [forget, setForget] = useState(false);

    useEffect(() => {
        setChange(true);
        setForget(false);
    }, []);

    return (
        <Container>
            <Logo src = {Media} />
            <br /><br />
            {!forget ?
                <>
                {change  ?
                    <>
                    <Login />
                    <DivBtn>
                        <Btn onClick={() => setChange(false)}> Não possui uma conta? Cadastre-se! </Btn>
                        <Btn onClick={() => setForget(true)}> Esqueceu a senha? </Btn>
                    </DivBtn>
                    </>
                :
                    <>
                    <Cadastro />
                    <DivBtn>
                        <Btn onClick={() => setChange(true)}> Já possui uma conta? Faça login! </Btn>
                    </DivBtn>
                    </>
                }
                </>
            :
                <>
                <RedefinirSenha />
                <DivBtn>
                    <Btn id="Redefinir" onClick={() => setForget(false)}> Faça Login! </Btn>
                </DivBtn>
                </>
            }
            
        </Container>
    );
}

export default Conta;