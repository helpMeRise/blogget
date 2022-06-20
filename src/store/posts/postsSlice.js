import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // changePage: (state, action) => {
    //   state.page = action.payload.page;
    //   state.after = '';
    //   state.isLast = false;
    // },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.data = action.payload.posts;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default postsSlice.reducer;


// case POSTS_REQUEST_SUCCESS_AFTER:
//       return {
//         ...state,
//         loading: false,
//         data: [...state.data, ...action.posts],
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };
