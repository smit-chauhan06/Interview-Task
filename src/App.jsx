import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DynamicForm from "./Pages/DynamicForm";
import EmpManagement from "./Pages/Task01-EmpManagement";
import CountDown from "./Pages/Task02-CountDown";
import FileExplorer from "./Pages/Task03-FileExplorer";
import Pagination from "./Pages/Task04-Pagination";
import ToDoList from "./Pages/Task05-ToDoList";
import DeepClone from "./Pages/Task06-DeepCloneObject";
import UseReudcerHook from "./Pages/Task07-UseReducerHook";
import ProgressBar from "./Pages/Task08-ProgressBar";

import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginPage from "./Pages/GoogleLogin";
import PasswordGenerator from "./Pages/Task09-PasswordGenerator";
import GridLights from "./Pages/Task10-GridLights";
import { UserContextProvider } from "./Pages/Task11-Context";
import NestedCheckBoxes from "./Pages/Task12-NestedCheckBoxes";
import MultipartForm from "./Pages/Task14-Dynamic-Multipart-form";

const TanStack = lazy(() => import("./Pages/TanStack"));

function App() {
  return (
    <GoogleOAuthProvider clientId="663245698228-18le47d9i8b993ptsi831njs9e0ji7ce.apps.googleusercontent.com">
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100vw",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading....
            </div>
          }
        >
          {/* <Routes>
          <Route path="/tanstack" element={<TanStack />} />
          <Route
            exact
            path="/"
            element={<Navigate to={"/tanstack"} replace={true} />}
          />
        </Routes> */}
          {/* <DynamicForm /> */}
          {/* <EmpManagement /> */}
          {/* <CountDown /> */}
          {/* <FileExplorer /> */}
          {/* <ToDoList /> */}
          {/* <Pagination /> */}
          {/* <DeepClone /> */}
          {/* <UseReudcerHook /> */}
          {/* <EmiCalculator /> */}
          {/* <ProgressBar /> */}
          {/* <GoogleLoginPage /> */}
          {/* <UserContextProvider>
            <PasswordGenerator />
          </UserContextProvider> */}
          {/* <GridLights /> */}
          {/* <NestedCheckBoxes /> */}
          <MultipartForm />
        </Suspense>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
