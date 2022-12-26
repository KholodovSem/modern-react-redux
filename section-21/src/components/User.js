import { GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/useThunk";
import { ExpandablePanel } from "./ExpandablePanel";
import Button from "./Button";
import { removeUserById } from "../store";
import { AlbumsList } from './AlbumsList';

export const User = ({ user }) => {
  const [isLoading, error, removeUser] = useThunk(removeUserById);

  const handleDeleteUser = () => {
    removeUser(user);
  }

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>)


  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>)
};