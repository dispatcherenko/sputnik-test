import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import useTasksStore from "@features/tasks/tasks";

function App() {
  const { fetchTasks, fetchFavorites } = useTasksStore();

  useEffect(() => {
    fetchTasks();
    fetchFavorites();
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
