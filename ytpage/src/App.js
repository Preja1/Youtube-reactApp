import "./App.css";
import Video from "./components/Video";
import videos from "./data/Data";

function App() {
  return (
    <>
      <div className="App">
        {videos.map((video) => (
          <Video
            key={video.id}
            image={video.image}
            title={video.title}
            cannel={video.cannel}
            verified={video.verified}
            views={video.views}
            time={video.time}
            onPlay={() => console.log("Playing",video.title)}
            onPause={() => console.log("Paused",video.title)}
          ></Video>
        ))}
      </div>
    </>
  );
}

export default App;
