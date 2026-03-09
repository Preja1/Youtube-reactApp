import "./AddVideo.css";
import { useEffect, useState } from "react";
const initialState = {
  image: "",
  title: "",
  cannel: "Coder",
  verified: true,
  views: "",
  time: "",
};
function AddVideo({ addVideos, editForm, updateForm }) {
  let [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      video.title === "" ||
      video.views === "" ||
      video.time === "" ||
      video.image === ""
    ) {
      alert("Please fill all fields and select an image!");
    } else {
      if (editForm) {
        updateForm(video);
      } else {
        addVideos(video);
      }
      setVideo(initialState);
    }
  }

  useEffect(() => {
    if (editForm) {
      setVideo(editForm);
    }
  }, [editForm]);

  function handleChange(e) {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  function handleImageChange(e) {
    e.stopPropagation();
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setVideo({ ...video, image: imageUrl });
    }
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={video.title}
        required
      />
      <input
        type="text"
        name="views"
        placeholder="Views"
        onChange={handleChange}
        value={video.views}
        required
      ></input>
      <input
        type="text"
        name="time"
        placeholder="Time"
        onChange={handleChange}
        value={video.time}
        required
      ></input>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <button className="addVideo" onClick={handleSubmit}>
        {editForm ? "Edit" : "Add"} video
      </button>
    </form>
  );
}
export default AddVideo;
