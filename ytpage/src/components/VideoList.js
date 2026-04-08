import Video from "../components/Video";
function VideoList({dispatch,editVideo,videos}){
    return (
        <>
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
            dispatch={dispatch}
            editVideo={editVideo}
          ></Video>
        ))}
        </>
    )
}
export default VideoList;