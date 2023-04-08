import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
<<<<<<< HEAD
  await axios.delete(`http://localhost:3005/users/${user.id}`);
=======
  await axios.delete(`http://localhost:3001/users/${user.id}`);
>>>>>>> 93a4bc78a7f31a42c6205a2af8876c1402f5ce10

  return user;
});

export { removeUser };
