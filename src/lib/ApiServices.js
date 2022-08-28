import { useState, useEffect } from "react";

// this is how you should call api to get data,loading,error
function usePlaceHolderTodos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}

export { usePlaceHolderTodos };
// u should also add export from lib/index.js
