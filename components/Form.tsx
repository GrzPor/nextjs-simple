'use client';

import { createUser } from '@/utils/actions';

const Form = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input className={inputStyle} type="text" name="firstName" defaultValue="peter" required />
      <input className={inputStyle} type="text" name="lastName" defaultValue="smith" required />
      <button className={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
};

const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow text-gray-700 rounded py-2 px-3';
const buttonStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form;
