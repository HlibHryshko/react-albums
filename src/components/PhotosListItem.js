const PhotosListItem = ({ photo }) => {
  return <div className="relative m-2">
    <img className="h-20 w-20" src={photo.url} alt="random pic"></img>
  </div>;
};

export default PhotosListItem;
