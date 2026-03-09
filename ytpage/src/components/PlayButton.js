import "./PlayButton.css";
import { useState } from "react";

function PlayButton({ onPlay, onPause }) {
  let [playing, setPlaying] = useState(false);
  function handleEvent(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <button className="action" onClick={handleEvent}>{playing?"⏸":"▶"}
      
    </button>
  );
}
export default PlayButton;
