import "./Video.css";
import PlayButton from "../components/PlayButton";

function Video({id, image, title, cannel, verified, views, time,dispatch,editVideo}) {
  return (
    <>
      <div className="card">
        <div className="container">
          <button className="close" onClick={()=>dispatch({ type: "DELETE", payload: id })}>X</button>
          <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
          <PlayButton
            onPlay={() => console.log("Playing..", title)}
            onPause={() => console.log("Paused", title)}
          ></PlayButton>
          <div className="image">
            <img src={image}alt={title} />
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
