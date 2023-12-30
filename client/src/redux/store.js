import { configureStore, congfigureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import themeModeSlice from "./features/themeModeSlice";
import authModalSlice from "./features/authModalSlice";
import globalLoandingSlice from "./features/globalLoandingSlice";
import appStateSlice from "./features/appStateSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        themeMode: themeModeSlice,
        authoModal: authModalSlice,
        globalLoading: globalLoandingSlice, 
        appState: appStateSlice      
    }
});

export default store;

