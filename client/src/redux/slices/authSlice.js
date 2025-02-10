// // src/redux/authSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';
// import { loginApi, resetPasswordApi } from '@/api/AuthApi';  // Import the API methods

// // Initial state
// const initialState = {
//   token: Cookies.get('auth_token') || null,
//   loading: false,
//   error: null,
// };

// // Login thunk
// export const login = createAsyncThunk('/auth/login', async ({ email, password }) => {
//   try {
//     const token = await loginApi(email, password);  // Call the login API
//     return token;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// // Reset Password thunk
// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async ({ email }) => {
//     try {
//       const message = await resetPasswordApi(email);  // Call the reset password API
//       return message;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// // Auth slice definition
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       Cookies.remove('auth_token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload;
//         Cookies.set('auth_token', action.payload, { expires: 7 });
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resetPassword.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(resetPassword.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// // Export actions
// export const { logout } = authSlice.actions;











import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for registering a user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      return response.data;  // Success response
    } catch (error) {
      return rejectWithValue(error.response.data);  // Error response
    }
  }
);

// Thunk for logging in
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', loginData);
      return response.data;  // Success response with tokens
    } catch (error) {
      return rejectWithValue(error.response.data);  // Error response
    }
  }
);

// Thunk for refreshing token
export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/refresh-token', { refreshToken });
      return response.data;  // Success response with new token
    } catch (error) {
      return rejectWithValue(error.response.data);  // Error response
    }
  }
);

// Thunk for resetting password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/reset-password', { email, otp, newPassword });
      return response.data;  // Success response
    } catch (error) {
      return rejectWithValue(error.response.data);  // Error response
    }
  }
);

// Initial state
const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Slice for auth
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Refresh access token
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Reset password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;  // User logs out after reset
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

