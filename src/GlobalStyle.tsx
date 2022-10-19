import styled, { createGlobalStyle } from "styled-components"
import map from './img/map.png'

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.section `
    background-color: #24282F;
    min-height: 100vh;
    section {
        height: 480px;
        width: 480px;
        background-image: url(${map});
        background-position: left top;
        background-size: 100%;
    }
`