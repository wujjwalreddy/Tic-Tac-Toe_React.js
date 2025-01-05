let initalBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectCell,turns}){
    /*const [board,setBoard] = useState(initalBoard);

    function handleBoard(rowIndex,colIndex){
        setBoard((prevBoard)=>{
            const updatedBoard =[...prevBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]=Activesymbol;
            return updatedBoard;A
        })
        onSelectCell();
    }*/
   let board = initalBoard;
   for(const turn of turns){
    const {square,player} = turn;
    const {row,col} =square;
    board[row][col] = player;
   }
    return (
        <ol id="game-board">
            {board.map((row,rowIndex)=>(
                <li key={rowIndex} >
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onSelectCell(rowIndex,colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}