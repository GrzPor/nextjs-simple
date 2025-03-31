import { fetchUsers } from '@/utils/actions';
import DeleteButton from './DeleteButton';

const UserList = async () => {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map(user => {
            return (
              <h4
                className="capitalize text-lg flex justify-between item-center mb-2"
                key={user.id}
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No users...</p>
      )}
    </div>
  );
};

export default UserList;
