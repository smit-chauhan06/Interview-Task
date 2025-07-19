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

const TanStack = lazy(() => import("./Pages/TanStack"));

function App() {
  return (
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
        <DeepClone />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
