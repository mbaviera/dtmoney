import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);//3 colunas de tamanhos iguais, podia ser tbm 1fr 1fr 1fr
    gap: 2rem;//espaçamento entre os itens do grid
    margin-top: -10rem;

    div {//cada div de cada um la
        background:  var(--shape);//cor branca nelas
        padding: 1.5rem 2rem;//aumentar o tamanho delas
        border-radius: 0.25rem;
        color: var(--text-title);//cor do texto

        header{//header dentro de cada div
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {//fonte deles
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {//a div que tem a classe highlight tem o fundo green e o texto branco
            background: var(--green);
            color: #fff;
        }
    }
`;