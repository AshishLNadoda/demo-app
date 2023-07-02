import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";

import { darkTheme, lightTheme } from "./components/test2july/theme/theme";
import { toggleTheme } from "./components/test2july/redux/theme/ThemeSlice"

export default function App() {
  // get theme from store
  const theme = useSelector((state) => state.theme);

  // initialize dispatch variable
  const dispatch = useDispatch();

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Dark Light Button"
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <Paper
          style={{
            minHeight: "100vh",
            borderRadius: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>You can toggle switch to use my project -------></h1>
        <h1> I AM UNABLE TO MAKE THE VIDEO  SO I GIVE MY ANSWER HERE</h1>
        
        <h2>QUESTION -What is redux?</h2>
        <p> ANSWER:  Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test</p>

        <h2>QUESTION -How it is different from context API?</h2>
        <p> Context API and Redux difference
Redux is a complete state manager capable of allowing an app to undo/redo actions and provides advanced developer tooling for debugging. Context API is designed as a dependency injection mechanism that allows making data available through the component tree without being manually passed.</p>


<h2>- What are actions in redux</h2>
<p>
Actions are plain JavaScript object that contains information. Action is one of the building blocks of Redux
</p>

<h2>What is useSelector and useDispatch in react redux</h2>
<p>
useSelector() ​ Allows you to extract data from the Redux store state for use in this component, using a selector function</p>
<p> usedispatch</p>
        <ToggleSwitch />
      </Paper>
    </ThemeProvider>
  );
}