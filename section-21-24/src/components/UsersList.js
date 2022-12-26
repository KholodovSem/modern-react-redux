import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fethUsers, addUser } from '../store';
import useThunk from '../hooks/useThunk';
import { Skeleton } from './Skeleton';
import Button from './Button';
import { User } from './User';

export const UsersList = () => {
  const [isLoadingUsers, loadingUsersError, getUsers] = useThunk(fethUsers);
  const [isCreatingUser, creatingUserError, addNewUser] = useThunk(addUser);
  const users = useSelector(state => state.users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleUserAdd = () => {
    addNewUser();
  }

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = users.map(user => {
      return <User key={user.id} user={user} />
    })
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>);
}
