import React, { useEffect, useState, useMemo } from "react";

const Pagination = () => {
  const [list, setList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = useMemo(() => Math.ceil(list.length / pageSize), [list]);

  const currentPageData = useMemo(() => {
    const start = (activePage - 1) * pageSize;
    return list.slice(start, start + pageSize);
  }, [list, activePage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => {
      const pageNum = i + 1;
      return (
        <div
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          style={{
            padding: "5px 10px",
            cursor: "pointer",
            backgroundColor: activePage === pageNum ? "#fff" : "#000",
            color: activePage === pageNum ? "#000" : "#fff",
            border: "1px solid black",
          }}
        >
          {pageNum}
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div style={styles.centered}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div style={styles.container}>
        {currentPageData.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3 style={{ margin: 0 }}>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div style={styles.paginationContainer}>
        <button
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        >
          {"<"}
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === totalPages}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  card: {
    backgroundColor: "whitesmoke",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #ccc",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  centered: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Pagination;
