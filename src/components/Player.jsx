import { useState} from "react";

export default function Player({initialName, symbol, isActive}){
    const [ playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function editClickHandler() {
        setIsEditing((editing) => !editing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }



    return (
        <li className={isActive ? 'active' : undefined}>
             <span className="player">
                {editablePlayerName}
             </span>
            <span className="player-symbol">{symbol}</span>
            <button onClick={ editClickHandler }>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}