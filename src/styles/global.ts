import { createGlobalStyle } from "styled-components";

/* ESTILOS GLOBAIS DA APLICACAO */

export const GlobalStyle = createGlobalStyle`
    :root {//define as cores
        --background: #f0f2f5; 
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33CC95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    //font-size: 16px (desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background-color: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button { //defino a fonte poppings pra esses elementos, pq por padrao eles nao importam a fonte do body
        font-family: 'Poppins', sans-serif; //caso nao carregue a fonte usa a sans-serif mesmo
        font-weight: 400;//seta com 400 (que vem la do figma) pq o html usa 500 por padrao
    }

    h1, h2, h3, h4, h5, h6, strong { //tags de negrito com fontweight correta
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;//tudo que tiver desabilitado deixo com opacidade reduzida
        cursor: not-allowed;
    }
    
`
