import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
function App() {
  const [Activeplayer,setActiveplayer] = useState('X');
  const [gameTurns,setTurns] = useState([]);

  function handleActiveplayer(rowIndex,colIndex){
    setActiveplayer((curActiveplayer)=> (curActiveplayer=='X'? 'O':'X'));
    
    setTurns((prevturn) =>{
      let curplayer='X';

      if(prevturn.length>0 && prevturn[0].player=='X') {
        curplayer='O';
      }
      
      const updatedTurns =[
        {square:{row:rowIndex,col:colIndex},player:curplayer},...prevturn
      ]
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="Player-1" symbol="X" isactive={Activeplayer=='X'}/>
          <Player intialName="Player-2" symbol="O" isactive={Activeplayer=='O'}/>
        </ol>
        <GameBoard onSelectCell={handleActiveplayer} turns={gameTurns}/>
      </div >
    </main>
  );
}

export default App;