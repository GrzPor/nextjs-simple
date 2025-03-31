import { fetchUsers } from '@/utils/actions';

const UserList = async () => {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map(user => {
            return (
              <h4 key={user.id}>
                {user.firstName} {user.lastName}
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
