# SET ENV and Appwrite 
- .env and how to import it Learn't

# Build Auth Service
- src/appwrite/auth.js

# Config DB
- src/apprwrite/confi.js
-- createPost, updatePost, getPost, deletePost, fileUpload, filePreview

# Config redux toolkit
- 1. store/store.js
```javascript
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{

    }
});

export default store;
```

- 2. store/authSlice.js
```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state,payload)=>{
            state.status=false;
            state.userData=null;
        }

    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;
```