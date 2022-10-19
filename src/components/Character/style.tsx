import styled from "styled-components"
import icon from '../../img/char.png'

export const Container = styled.div<{left: number, top: number, size: number, sidePosition: number}> `
    background-image: url(${icon});
    background-position: 0px ${props => props.sidePosition}px;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`