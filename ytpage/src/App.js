import "./App.css";
import Video from "./components/Video";
import videoDb from "./data/Data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
// import Login from "./components/Login";
// import LoginButton from "./components/LoginButton";
function App() {
  let [videos, setVideos] = useState(videoDb);
  let [editForm, setEditForm] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditForm(videos.find((video) => video.id === id));
  }

  function updateForm(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }
  return (
    <>
      <div className="App">
        {/* {!isLoggedIn ? (
      <Login setIsLoggedIn={setIsLoggedIn} />
    ) :(
    <> */}
{/* <LoginButton></LoginButton> */}
        <AddVideo
          addVideos={addVideos}
          editForm={editForm}
          updateForm={updateForm}
        ></AddVideo>

        {videos.map((video) => (
          <Video
            // key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            cannel={video.cannel}
            verified={video.verified}
            views={video.views}
            time={video.time}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          ></Video>
        ))}
        {/* </>
      )} */}
      </div>
    </>
  );
}

export default App;
