import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/ThemeSlice";

export default configureStore({
  reducer: {
    theme,
  },
});