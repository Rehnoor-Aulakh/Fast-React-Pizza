import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername('');
    // then redirect to the menu page
    navigate('/menu');
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 mt-3 w-80 md:w-96"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary" onClick={() => {}}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
