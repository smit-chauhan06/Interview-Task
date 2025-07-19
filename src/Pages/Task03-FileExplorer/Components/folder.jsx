import { useRef, useState } from "react";
import "./styles.css";

function Folder({ explorer, handleInsertNode, handleUpdateNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef();

  const handleNewFolder = (e, isFolder, isEdit, data) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
    setTimeout(() => {
      if (isEdit && inputRef) {
        inputRef.current.value = data;
      }
    }, 100);
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      if (isEdit) {
        handleUpdateNode(explorer.id, e.target.value, showInput.isFolder, true);
        setIsEdit(false);
      } else {
        handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      }
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder)
    return (
      <div
        style={{
          marginTop: "5px",
        }}
      >
        <div
          onClick={() => {
            setExpand(!expand);
          }}
          className="folder"
        >
          <span>📂{explorer.name}</span>
          <div>
            <button
              style={{
                marginRight: 10,
                padding: "2px 5px",
              }}
              onClick={(e) => {
                handleNewFolder(e, true);
              }}
            >
              Folder +
            </button>
            <button
              style={{
                marginRight: 10,
                padding: "2px 5px",
              }}
              onClick={(e) => {
                handleNewFolder(e, false);
              }}
            >
              File +
            </button>
            <button
              style={{
                marginRight: 10,
                padding: "2px 5px",
              }}
              onClick={(e) => {
                setIsEdit(true);
                handleNewFolder(e, false, true, explorer?.name);
              }}
            >
              Edit
            </button>
          </div>
        </div>
        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 25,
          }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                ref={inputRef}
                className="inputContainer__input"
                autoFocus
                type={"text"}
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={onAddFolder}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <Folder
                explorer={exp}
                key={exp.id}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </div>
    );
  else {
    return <span>📄{explorer.name}</span>;
  }
}

export default Folder;
