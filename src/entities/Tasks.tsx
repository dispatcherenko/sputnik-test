import { create } from "zustand";
import axios from "axios";

type Task = {
  id: number;
  attributes: {
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type TasksState = {
  tasks: Task[];
  isLoading: boolean;
  errors: string[];
  addTask: (newTask: object) => void;
  fetchTasks: () => void;
};

const useTasksStore = create<TasksState>((set) => ({
  tasks: [
    {
      id: 2045,
      attributes: {
        title: "17",
        description: "17",
        status: "notCompleted",
        createdAt: "2024-07-07T05:27:48.639Z",
        updatedAt: "2024-07-07T07:22:09.576Z",
        publishedAt: "2024-07-07T05:27:48.638Z",
      },
    },
    {
      id: 2145,
      attributes: {
        title: "123",
        description: "123",
        status: "complete",
        createdAt: "2024-07-14T03:57:22.295Z",
        updatedAt: "2024-07-14T04:01:13.164Z",
        publishedAt: "2024-07-14T03:57:22.293Z",
      },
    },
    {
      id: 2018,
      attributes: {
        title: "1234",
        description: "1234\n",
        status: "notCompleted",
        createdAt: "2024-07-06T06:13:00.225Z",
        updatedAt: "2024-07-07T07:17:13.940Z",
        publishedAt: "2024-07-06T06:13:00.224Z",
      },
    },
    {
      id: 2060,
      attributes: {
        title: "32",
        description: "32",
        status: "notCompleted",
        createdAt: "2024-07-07T07:43:01.585Z",
        updatedAt: "2024-07-07T08:11:43.001Z",
        publishedAt: "2024-07-07T07:43:01.585Z",
      },
    },
    {
      id: 2025,
      attributes: {
        title: "2222223",
        description: "222222",
        status: "notCompleted",
        createdAt: "2024-07-06T06:38:29.562Z",
        updatedAt: "2024-07-07T07:43:19.457Z",
        publishedAt: "2024-07-06T06:38:29.561Z",
      },
    },
    {
      id: 2041,
      attributes: {
        title: "13",
        description: "13",
        status: "notCompleted",
        createdAt: "2024-07-07T05:27:29.116Z",
        updatedAt: "2024-07-07T08:17:11.072Z",
        publishedAt: "2024-07-07T05:27:29.115Z",
      },
    },
    {
      id: 2146,
      attributes: {
        title: "1111111111111111111",
        description: "1111111111111111111",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:03.274Z",
        updatedAt: "2024-07-14T04:59:03.274Z",
        publishedAt: "2024-07-14T04:59:03.273Z",
      },
    },
    {
      id: 2147,
      attributes: {
        title: "222222222222",
        description: "222222222222",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:09.475Z",
        updatedAt: "2024-07-14T04:59:09.475Z",
        publishedAt: "2024-07-14T04:59:09.474Z",
      },
    },
    {
      id: 2148,
      attributes: {
        title: "333333333333333333333",
        description: "333333333333333333333",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:12.311Z",
        updatedAt: "2024-07-14T04:59:12.311Z",
        publishedAt: "2024-07-14T04:59:12.310Z",
      },
    },
    {
      id: 2132,
      attributes: {
        title: "Задача",
        description: "Задача",
        status: "not_completed",
        createdAt: "2024-07-09T08:22:50.558Z",
        updatedAt: "2024-07-09T08:22:50.558Z",
        publishedAt: "2024-07-09T08:22:50.556Z",
      },
    },
    {
      id: 2135,
      attributes: {
        title: "0",
        description: "0",
        status: "notCompleted",
        createdAt: "2024-07-13T09:36:11.913Z",
        updatedAt: "2024-07-13T09:36:11.913Z",
        publishedAt: "2024-07-13T09:36:11.911Z",
      },
    },
    {
      id: 2136,
      attributes: {
        title: "0",
        description: "0",
        status: "notCompleted",
        createdAt: "2024-07-13T09:39:11.966Z",
        updatedAt: "2024-07-13T09:39:11.966Z",
        publishedAt: "2024-07-13T09:39:11.965Z",
      },
    },
    {
      id: 2137,
      attributes: {
        title: "0",
        description: "0",
        status: "notCompleted",
        createdAt: "2024-07-13T09:39:37.207Z",
        updatedAt: "2024-07-13T09:39:37.207Z",
        publishedAt: "2024-07-13T09:39:37.206Z",
      },
    },
    {
      id: 2138,
      attributes: {
        title: "0",
        description: "0",
        status: "notCompleted",
        createdAt: "2024-07-13T09:40:58.626Z",
        updatedAt: "2024-07-13T09:40:58.626Z",
        publishedAt: "2024-07-13T09:40:58.625Z",
      },
    },
    {
      id: 2139,
      attributes: {
        title: "00000",
        description: "00000",
        status: "notCompleted",
        createdAt: "2024-07-13T09:41:28.966Z",
        updatedAt: "2024-07-13T09:41:28.966Z",
        publishedAt: "2024-07-13T09:41:28.965Z",
      },
    },
    {
      id: 2140,
      attributes: {
        title: "0000000",
        description: "0000000",
        status: "notCompleted",
        createdAt: "2024-07-13T09:42:03.106Z",
        updatedAt: "2024-07-13T09:42:03.106Z",
        publishedAt: "2024-07-13T09:42:03.105Z",
      },
    },
    {
      id: 2036,
      attributes: {
        title: "8",
        description: "8",
        status: "completed",
        createdAt: "2024-07-07T05:26:57.571Z",
        updatedAt: "2024-07-07T08:30:00.147Z",
        publishedAt: "2024-07-07T05:26:57.570Z",
      },
    },
    {
      id: 2141,
      attributes: {
        title: "123",
        description: "123",
        status: "notCompleted",
        createdAt: "2024-07-14T02:11:45.776Z",
        updatedAt: "2024-07-14T02:11:45.776Z",
        publishedAt: "2024-07-14T02:11:45.773Z",
      },
    },
    {
      id: 2142,
      attributes: {
        title: "12345",
        description: "12345",
        status: "notCompleted",
        createdAt: "2024-07-14T02:11:52.304Z",
        updatedAt: "2024-07-14T02:11:52.304Z",
        publishedAt: "2024-07-14T02:11:52.303Z",
      },
    },
    {
      id: 2149,
      attributes: {
        title: "4444444444444444444",
        description: "4444444444444444444",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:14.460Z",
        updatedAt: "2024-07-14T04:59:14.460Z",
        publishedAt: "2024-07-14T04:59:14.459Z",
      },
    },
    {
      id: 2150,
      attributes: {
        title: "55555555555555",
        description: "55555555555555",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:16.433Z",
        updatedAt: "2024-07-14T04:59:16.433Z",
        publishedAt: "2024-07-14T04:59:16.433Z",
      },
    },
    {
      id: 2040,
      attributes: {
        title: "1212",
        description: "12",
        status: "notCompleted",
        createdAt: "2024-07-07T05:27:24.799Z",
        updatedAt: "2024-07-07T08:02:56.097Z",
        publishedAt: "2024-07-07T05:27:24.798Z",
      },
    },
    {
      id: 2151,
      attributes: {
        title: "6666666666666",
        description: "6666666666666",
        status: "notCompleted",
        createdAt: "2024-07-14T04:59:18.321Z",
        updatedAt: "2024-07-14T04:59:18.321Z",
        publishedAt: "2024-07-14T04:59:18.321Z",
      },
    },
    {
      id: 2061,
      attributes: {
        title: "33",
        description: "33",
        status: "completed",
        createdAt: "2024-07-07T07:43:04.581Z",
        updatedAt: "2024-07-07T09:18:59.627Z",
        publishedAt: "2024-07-07T07:43:04.580Z",
      },
    },
    {
      id: 2068,
      attributes: {
        title: "39",
        description: "39",
        status: "notCompleted",
        createdAt: "2024-07-07T08:37:21.358Z",
        updatedAt: "2024-07-07T09:19:08.655Z",
        publishedAt: "2024-07-07T08:37:21.357Z",
      },
    },
  ],
  isLoading: false,
  errors: [],
  addTask: (newTask: object) =>
    set((state) => ({
      tasks: [...state.tasks],
      newTask,
    })),
  fetchTasks: async () => {
    set((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      const res = await axios.get("https://cms.dev-land.host/api/tasks");
      const tasks = res.data.data.map((task: Task) => ({
        id: task.id,
        attributes: task.attributes,
      }));

      console.log("fetch");

      set((state) => ({
        ...state,
        tasks: tasks,
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
}));

export default useTasksStore;
