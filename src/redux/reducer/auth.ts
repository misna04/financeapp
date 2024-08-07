// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../services/api';

export const authLogin = createAsyncThunk('auth/login', async () => {
  try {
  } catch (err) {
    return err;
  }
});
