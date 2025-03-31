'use client';
import { useFormState, useFormStatus } from 'react-dom';

import { createUser } from '@/utils/actions';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className={buttonStyle} type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useFormState(createUser, null);

  return (
    <form action={formAction} className={formStyle}>
      {message && <p className="text-green-500">{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input className={inputStyle} type="text" name="firstName" defaultValue="peter" required />
      <input className={inputStyle} type="text" name="lastName" defaultValue="smith" required />
      <SubmitButton />
    </form>
  );
};

const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow text-gray-700 rounded py-2 px-3';
const buttonStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form;
