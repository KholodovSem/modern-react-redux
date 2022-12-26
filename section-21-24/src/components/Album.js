import { GoTrashcan } from "react-icons/go";
import { ExpandablePanel } from "./ExpandablePanel";
import { useRemoveAlbumMutation } from '../store';
import { PhotosList } from "./PhotosList";
import Button from "./Button";

export const Album = ({ album }) => {
  const [removeAlbum, removeResults] = useRemoveAlbumMutation();

  const handleRemoveAlbum = (album) => {
    removeAlbum(album)
  }

  const header = (
    <>
      <Button
        className="mr-2"
        loading={removeResults.isLoading}
        onClick={() => handleRemoveAlbum(album)}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>)

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>)

};

