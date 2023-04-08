import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async () => {
<<<<<<< HEAD
  const response = await axios.post('http://localhost:3005/users', {
=======
  const response = await axios.post('http://localhost:3001/users', {
>>>>>>> 93a4bc78a7f31a42c6205a2af8876c1402f5ce10
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
