import React, { useState } from "react";
import Folder from "./Components/folder";
import explore from "./folderData";
import useTraversTree from "./hooks/useTraversTree";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explore);

  const { insertNode, updateNode } = useTraversTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleUpdateNode = (folderId, item, isFolder) => {
    const finalTree = updateNode(explorerData, folderId, item, isFolder, true);
    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder
        handleInsertNode={handleInsertNode}
        handleUpdateNode={handleUpdateNode}
        explorer={explorerData}
      />
    </div>
  );
};

export default FileExplorer;
