import { useState} from "react";

export default function LudoBoard() {
    let[moves, setMoves] = useState({blue:0, yellow: 0, green: 0, red:0});

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return{ ...moves, blue: prevMoves.blue +1}
        })
    }
    return(
        <div>
            <p>game begin</p>
            <div className="board">
                <p>blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick= {updateBlue}>+1</button>
                 <p>yellow moves =</p>
                <button>+1</button>
                 <p>green moves =</p>
                <button>+1</button>
                 <p>red moves =</p>
                <button>+1</button>
            </div>
        </div>
    )
}