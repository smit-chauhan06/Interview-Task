import React, { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM": {
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      }
      case "RESET_FORM": {
        return {
          ...initialState,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      UseReducerHook
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <input
          name="name"
          placeholder="Name"
          style={{
            border: "1px solid  black",
            borderRadius: "10px",
            padding: "5px 10px",
            width: "25vw",
          }}
          value={state.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="email"
          placeholder="email"
          style={{
            border: "1px solid  black",
            borderRadius: "10px",
            padding: "5px 10px",
            width: "25vw",
          }}
          value={state.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="password"
          placeholder="password"
          style={{
            border: "1px solid  black",
            borderRadius: "10px",
            padding: "5px 10px",
            width: "25vw",
          }}
          value={state.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          style={{
            backgroundColor: "whitesmoke",
            border: "1px solid black",
            height: "40px",
            borderRadius: "20px",
          }}
          onClick={() => {
            dispatch({
              type: "RESET_FORM",
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
