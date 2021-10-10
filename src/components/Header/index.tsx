import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps {//no typescript precisa informar o tipo
    onOpenNewTransactionModal: ( ) => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps ) {    //as props que to passando sao do tipo HeaderProps

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal} >
                    Nova Transação
                </button>                               
            </Content>
        </Container>
    )
}