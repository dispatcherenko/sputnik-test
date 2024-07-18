import { create } from "zustand";
import axios from "axios";

const useTasksStore = create<TasksState>((set, get) => ({
  //===========================================================================
  tasks: [],
  //===========================================================================
  favorites: [],
  fetchFavorites: async () => {
    const json = await localStorage.getItem("favorites");
    if (json !== null) {
      set((state) => ({
        ...state,
        favorites: JSON.parse(json),
      }));
    }
  },
  toggleFavorite: (task: Task) => {
    if (get().favorites.find((element) => element.id === task.id)) {
      set((state) => ({
        ...state,
        favorites: state.favorites.filter((element) => element.id !== task.id),
      }));
    } else {
      set((state) => ({
        ...state,
        favorites: [...state.favorites, task],
      }));
    }
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  //===========================================================================
  filters: [],
  filteredTasks: [],
  updateFilter: (newFilters: Filter[]) => {
    const filterTasks = (
      tasks: Task[],
      filters: Filter[],
      favorites: Task[]
    ): Task[] => {
      const completeFilter = filters.find(
        (filter) => filter.value === "complete"
      );
      const notCompleteFilter = filters.find(
        (filter) => filter.value === "notComplete"
      );
      const favoritesFilter = filters.find(
        (filter) => filter.value === "favorites"
      );

      return tasks.filter((task) => {
        const complete = task.attributes.status.startsWith("complete");
        const notComplete = task.attributes.status.startsWith("not");
        const favorite = favorites.some((fav) => fav.id === task.id);

        const matchesComplete = completeFilter && complete;
        const matchesNotComplete = notCompleteFilter && notComplete;
        const matchesFavorites = favoritesFilter && favorite;

        return matchesComplete || matchesNotComplete || matchesFavorites;
      });
    };

    set((state) => ({
      ...state,
      filters: newFilters,
      filteredTasks: filterTasks(get().tasks, newFilters, get().favorites),
    }));
  },
  //===========================================================================
  limit: 5,
  increaseLimit: () => {
    set((state) => ({
      ...state,
      limit: get().limit + 5,
    }));
  },
  total: 0,
  //===========================================================================
  isLoading: false,
  errors: [],
  //===========================================================================
  fetchTasks: async () => {
    set((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      const res = await axios.get(
        `https://cms.dev-land.host/api/tasks?sort=id&pagination%5Blimit%5D=${
          get().limit
        }`
      );
      const total = res.data.meta.pagination.total;
      const tasks = res.data.data.map((task: Task) => ({
        id: task.id,
        attributes: task.attributes,
      }));

      set((state) => ({
        ...state,
        tasks: tasks,
        filteredTasks: tasks,
        total: total,
        isLoading: false,
      }));

      get().updateFilter(get().filters);
    } catch (error: any) {
      set((state) => ({
        ...state,
        errors: [...state.errors, error.message],
        isLoading: false,
      }));
    }
  },
  addTask: async (task: PostTask) => {
    set((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      const tasks = get().tasks;

      const res = await axios.post("https://cms.dev-land.host/api/tasks", {
        data: {
          title: task.title,
          description: task.description,
          status: "notCompleted",
        },
      });

      const newTask = res.data.data;

      set((state) => ({
        ...state,
        filteredTasks: [...tasks, newTask],
        isLoading: false,
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        errors: [...state.errors, error.message],
        isLoading: false,
      }));
    }
  },
  deleteTask: async (id: number) => {
    set((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      const tasks = get().tasks;

      const res = await axios.delete(
        `https://cms.dev-land.host/api/tasks/${id}`
      );

      const deleted = res.data.data;
      const newTasks = tasks.filter((task) => task.id !== deleted.id);

      set((state) => ({
        ...state,
        filteredTasks: newTasks,
        isLoading: false,
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        errors: [...state.errors, error.message],
        isLoading: false,
      }));
    }
  },
  changeTask: async (id: number, task: PostTask) => {
    const tasks = get().filteredTasks;
    const current = tasks.find((task) => task.id === id);
    const prevStatus = current?.attributes.status;

    const newStatus = prevStatus?.includes("not")
      ? "completed"
      : "notCompleted";

    set((state) => ({
      ...state,
      filteredTasks: state.tasks.map((task: Task) =>
        task.id === id
          ? {
              ...task,
              attributes: {
                ...task.attributes,
                status: newStatus,
              },
            }
          : task
      ),
    }));

    try {
      await axios.put(`https://cms.dev-land.host/api/tasks/${id}`, {
        data: {
          title: task.title,
          description: task.description,
          status: newStatus,
        },
      });

      set((state) => ({
        ...state,
        isLoading: false,
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        tasks: state.tasks.map((task: Task) =>
          task.id === id
            ? {
                ...task,
                attributes: {
                  ...task.attributes,
                  status: prevStatus ?? newStatus,
                },
              }
            : task
        ),
        errors: [...state.errors, error.message],
        isLoading: false,
      }));
    }
  },
}));

export default useTasksStore;
