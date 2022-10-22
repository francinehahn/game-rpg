import {useEffect} from "react"
import { GlobalStyle, Container } from "./GlobalStyle"
import {Character} from './components/Character/Character'
import {useCharacter} from './hooks/useCharacter'

function App() {
  const char = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
        break
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
        break
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break
    }
  }

  let dangerMessage
  char.y < 12? dangerMessage = false : dangerMessage = true

  return (
    <>
      <GlobalStyle/>

      <Container dangerMessage={dangerMessage}>
        <section>
          <Character x={char.x} y={char.y} side={char.side}/>
        </section>
        <h2>Perigo!!!</h2>
      </Container>
    </>
  )
}

export default App
