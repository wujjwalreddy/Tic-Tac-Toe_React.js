import { useState } from "react";
export default function Player({intialName,symbol,isactive}) {
    const [isEditing,setEditing] = useState(false);
    const[name,setName] = useState(intialName);
    function handlestate(){
        setEditing(Editing => !Editing);
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    let playerName = <span className="player-name">{name}</span>;
    if(isEditing){
        playerName = <input type="text" required value={name} onChange={handleNameChange}/>
    }
    return (
        <li className={isactive?'active':undefined}>
            <span className="player-info">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handlestate}>{isEditing? 'Save':'Edit'}</button>
        </li>
    );
}