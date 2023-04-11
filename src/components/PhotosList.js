import { useAddAlbumMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";

const PhotosList = ({ album }) => {
  const {data, isFetching, error} = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddAlbumMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
};

export default PhotosList;
