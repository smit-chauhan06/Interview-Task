const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const updateNode = function (tree, folderId, item, isFolder, edit) {
    if (tree.id === folderId && edit) {
      return { ...tree, name: item };
    }

    if (tree.isFolder && tree.items.length > 0) {
      return {
        ...tree,
        items: tree.items.map((data) =>
          updateNode(data, folderId, item, isFolder, edit)
        ),
      };
    }

    return tree;
  };

  return { insertNode, updateNode };
};

export default useTraverseTree;
