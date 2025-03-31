'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

const getUsers = async () => {
  const users = await readFile('users.json', 'utf-8');
};

export const createUser = async (prevState: any, formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  //   const rawData = Object.fromEntries(formData); to samo co pobieranie kazdego key osobno - czyli to samo co linia 5 i 6
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath('/actions');
    return 'User created successfully';
  } catch (error) {
    return 'Failed to create user';
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  'use server';
  const result = await readFile('user.json', { encoding: 'utf-8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('user.json', JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const filteredUsers = users.filter(user => user.id !== id);
  await writeFile('user.json', JSON.stringify(filteredUsers));
  revalidatePath('/actions');
};
