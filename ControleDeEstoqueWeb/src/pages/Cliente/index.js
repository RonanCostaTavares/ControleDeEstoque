import React, { useState, useEffect } from 'react';

import { Container, DivBtn, Btn } from './Style';

import Historico from './Historico';
import Pedido from './Pedido';
import Perfil from './Perfil';

function Principal(){

    const [change, setChange] = useState(true);
    const [forget, setForget] = useState(false);

    useEffect(() => {
        setChange(true);
        setForget(false);
    }, []);

    function Voltar(opcao){
        setForget(false);
        opcao ? setChange(true) : setChange(false);
    }

    return(
        <Container>
            {!forget ? 
                <>
                    {change ?
                        <>
                            <Pedido />
                            <br /><br />
                            <DivBtn>
                                <Btn onClick={() => setChange(false)}> Perfil </Btn>
                            </DivBtn>
                        </>
                    :
                        <>
                            <Perfil />
                            <br /><br />
                            <DivBtn>
                                <Btn onClick={() => setChange(true)}> Pedido </Btn>
                            </DivBtn>
                        </>
                    }
                    <DivBtn>
                        <Btn onClick={() => setForget(true)}> Historico </Btn>
                    </DivBtn>
                </> 
            :
                <>
                    <Historico />
                    <br /><br />
                    <DivBtn>
                        <Btn onClick={() => Voltar(true)}> Pedido </Btn>
                        <Btn onClick={() => Voltar(false)}> Perfil </Btn>
                    </DivBtn>
                </>
            }
            
            
        </Container>
    )

}

export default Principal;