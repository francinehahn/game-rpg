import styled, { createGlobalStyle } from "styled-components"
import map from './img/map.png'

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.section<{dangerMessage: boolean}> `
    background-color: #24261e;
    height: 100vh;
    section {
        margin: auto;
        height: 520px;
        width: 966px;
        background-image: url(${map});
    }
    h2 {
        margin-top: 30px;
        color: red;
        text-align: center;
        font-size: 34px;
        font-family: sans-serif;
        opacity: ${props => props.dangerMessage ? 1 : 0};
        animation: ${props => props.dangerMessage ? 'bounce' : 'none'} 1.4s infinite;
    }
    @keyframes bounce {
        from {
            font-size: 34px;
            letter-spacing: 1px;
        }
        to {
            font-size: 38px;
            letter-spacing: 3px;
        }
    }
`