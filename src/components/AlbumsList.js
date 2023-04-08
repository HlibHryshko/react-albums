import { useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);

  let content = isLoading ? (
    <Skeleton times={3} />
  ) : error ? (
    <div>Error loading albums.</div>
  ) : (
    data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
    })
  );

  return (
    <div>
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
