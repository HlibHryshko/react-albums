import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content = isFetching ? (
    <Skeleton className="h-10 w-full" times={3} />
  ) : error ? (
    <div>Error loading albums.</div>
  ) : (
    data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    })
  );

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
