import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
<<<<<<< HEAD
  const response = await axios.get('http://localhost:3005/users');
=======
  const response = await axios.get('http://localhost:3001/users');
>>>>>>> 93a4bc78a7f31a42c6205a2af8876c1402f5ce10

  // DEV ONLY!!!
  await pause(1000);

  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
