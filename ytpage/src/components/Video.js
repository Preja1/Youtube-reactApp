import "./Video.css";

function Video({
  image,
  title,
  cannel,
  verified,
  views,
  time,
  onPlay,
  onPause,
}) {
  let playing = false;//don't use this approach
  function handleEvent() {
    if (playing) onPause();
    else onPlay();
    playing=!playing;
  }

  return (
    <>
      <div className="card" onClick={handleEvent}>
        <div className="container">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="title">{title}</div>
          <div className="cannel">
            {cannel}
            {verified ? "✅" : null}
          </div>
          <div className="views">
            {views}
            <span>•</span>
            {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
