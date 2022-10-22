import {Container} from './style'
import {CharacterSides} from '../../types/CharacterSides'

type Props = {
    x: number,
    y: number,
    side: CharacterSides
}

export function Character ({x, y, side} : Props) {
    const size = 30
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    let shadow
    y < 12? shadow = '#008000be' : shadow = '#fa0202bd'

    return <Container left={x * size} top={y * size} size={size} shadow={shadow} sidePosition={sides[side] ?? 0}/>
}