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
    height: 100vh;
    section {
        margin: auto;
        height: 520px;
        width: 966px;
        background-image: url(${map});
    }
`