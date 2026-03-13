import "./App.css";
import Video from "./components/Video";
import videoDb from "./data/Data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
// import Login from "./components/Login";
// import LoginButton from "./components/LoginButton";
function App() {
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDb);
  // let [videos, setVideos] = useState(videoDb);
  const [editForm, setEditForm] = useState(null);

  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  function addVideos(video) {
    dispatch({ type: "ADD", payload: video });
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    dispatch({ type: "DELETE", payload: id });
    // setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditForm(videos.find((video) => video.id === id));
  }

  function updateForm(video) {
    dispatch({ type: "UPDATE", payload: video })
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
            key={video.id}
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
