import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import useTasksStore from "@entities/Tasks";

function App() {
  const { fetchTasks, tasks } = useTasksStore();
  useEffect(() => {
    // fetchTasks();
  }, []);
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
