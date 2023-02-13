import { Link } from "react-router-dom";
import "./../styles/index.scss";
function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Tic Tac Toe</h1>
      <ul>
        <li>
          <Link to={"/singleplayer"}>Single Player</Link>
        </li>
        <li>
          <Link to={"/multiplayer"}>Multi Player</Link>
        </li>
      </ul>  
    
    </div>
  )
}

export default App
