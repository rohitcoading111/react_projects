const counterSlice = createSlice({
  name: 'counter',
  initialState:  {
    count:0
  },
  reducers: {
    increanment : (state,action) => {
        state.count += 1
    },
    decreanment : (state,action) => {
        state.count -= 1
    },
    increanmentByValue : (state,action) => {
        state.count += action.payload
    },
  }
})


export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;

