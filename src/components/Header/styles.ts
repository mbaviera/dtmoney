import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 2rem 1rem 12rem;//rem pega como base a fontsize de 16px definido no global, entao 10 rem = 160px
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {//cada rem ali multiplica por 16 que ta la no global
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2;//deixa mais leve a transicao do filter

        &:hover {//quando passa o mouse por cima do botão
            filter: brightness(0.9);//escure um pouco quando passa o mouse no botão
        }

    }
`