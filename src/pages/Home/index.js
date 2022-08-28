import "./index.css";
import { usePlaceHolderTodos } from "../../lib";
import { CircleLoader } from "react-spinners";
const Home = () => {
  const { data, error, loading } = usePlaceHolderTodos();
  console.log(data, error, loading);
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <CircleLoader color="#3d5af1" size={50} />
      </div>
    );
  }
  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  if (data.length > 0) {
    return (
      <div>
        <h1 className="text-center text-xl py-2">Home</h1>
        <h4 className="mb-2 text-center underline">JSON Placeholder Todos</h4>
        <ul className="p-5">
          {data.map((todo) => {
            console.log(todo);
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default Home;
