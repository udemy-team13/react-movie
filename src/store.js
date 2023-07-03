import { configureStore, createSlice } from "@reduxjs/toolkit";

var myArray = JSON.parse(localStorage.getItem("myArray")) || [];

let favList = createSlice({
  // createSlice 통해서 slice 생성
  name: "favList",
  initialState: [],
  reducers: {
    addFav(state, action) {
      console.log(state);
      var newObject = action.payload;
      myArray.push(newObject);
      localStorage.setItem("myArray", JSON.stringify(myArray));
    },
    removeFav(state, action) {
      let newObject = action.payload;
      console.log(newObject);
      return state;
    },
    setFav(state, action) {
      return state.concat(myArray);
    },
  },
});

export default configureStore({
  reducer: {
    favList: favList.reducer, // ruducer를 통해 등록
  },
});

export let { addFav, removeFav, setFav } = favList.actions; // 관습적으로 이렇게 디스트럭처링
