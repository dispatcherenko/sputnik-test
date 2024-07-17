export {};

declare global {
  type Filter = {
    label: string;
    value: string;
  };

  type Task = {
    id: Partial<number>;
    attributes: {
      title: string;
      description: string;
      status: Partial<string>;
      createdAt: Partial<string>;
      updatedAt: Partial<string>;
      publishedAt: Partial<string>;
    };
  };

  type PostTask = {
    title: string;
    description: string;
    status: string;
  };

  type TasksState = {
    tasks: Task[];
    filters: Filter[];
    filteredTasks: Task[];
    updateFilter: (newfilters: Filter[]) => void;
    favorites: Task[];
    limit: number;
    increaseLimit: () => void;
    total: number;
    isLoading: boolean;
    errors: string[];
    fetchFavorites: () => void;
    toggleFavorite: (task: Task) => void;
    fetchTasks: () => void;
    addTask: (task: PostTask) => void;
    deleteTask: (id: number) => void;
    changeTask: (id: number, task: PostTask) => void;
  };
}
