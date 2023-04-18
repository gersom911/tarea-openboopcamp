import { useState } from 'react'
import ComponenteA from './components/container/componenteA'



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <ComponenteA></ComponenteA>
    </div>
  )
}

export default App
