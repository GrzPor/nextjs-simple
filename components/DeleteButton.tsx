import { deleteUser } from '@/utils/actions';

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
