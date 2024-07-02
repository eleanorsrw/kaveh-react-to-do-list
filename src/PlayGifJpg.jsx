import { useState } from "react"
import kavehGif from "./assets/kaveh-encourage.gif"
import kavehJpg from "./assets/kaveh-encourage.jpg"


export function PlayGifJpg() {
    const [gif, setGif] = useState(false)


    function playGif(){
        setGif(true)
        setTimeout(() => {
          setGif(false)
        }, 1500)
      }

    return (
    <div className="left-container">
        <div className="kaveh-gif">
            {!gif && <img src={kavehJpg} alt="Kaveh waiting" />}
            {gif && <img src={kavehGif} alt="Kaveh gif playing"></img>}
        </div>
        <div className="kaveh-gif">
            {!gif && <img src={kavehJpg} alt="Kaveh waiting" />}
            {gif && <img src={kavehGif} alt="Kaveh gif playing"></img>}
        </div>
        <div className="new-list">
            <button 
            id="encouragement-button"
            onClick={playGif}

            >click for double encouragement!
            </button>
        </div>
    </div>
    )
}

