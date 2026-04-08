import "./App.css";
import videoDb from "./data/Data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import Login from "./components/Login";
// import LoginButton from "./components/LoginButton";
function App() {
  // let [videos, setVideos] = useState(videoDb);
  const [editForm, setEditForm] = useState(null);
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
        setEditForm(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDb);

  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }
  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  //   // setVideos(videos.filter((video) => video.id !== id));
  // }
  function editVideo(id) {
    setEditForm(videos.find((video) => video.id === id));
  }

  // function updateForm(video) {
  //   dispatch({ type: "UPDATE", payload: video });
  // }
  return (
    <>
      <div className="App">
        {/* {!isLoggedIn ? (
      <Login setIsLoggedIn={setIsLoggedIn} />
    ) :(
    <> */}
        {/* <LoginButton></LoginButton> */}
        <button className="login">Login</button>
        <AddVideo
          dispatch={dispatch}
          editForm={editForm}
        ></AddVideo>
        <VideoList
          dispatch={dispatch}
          editVideo={editVideo}
          videos={videos}
        ></VideoList>

        {/* </>
      )} */}
      </div>
    </>
  );
}

export default App;
