import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChatRoom from './components/ChatRoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChatRoom/>      
    </div>
  )
}

export default App
