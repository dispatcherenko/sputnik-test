import React from "react";
import TaskCard from "../shared/UI/TaskCard";
import { List } from "antd";
import useTasksStore from "@entities/Tasks";
import styled from "styled-components";

const TaskList = (props: any) => {
  const { tasks } = useTasksStore();

  const TasksList = styled(List)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 5vh 25vw;
  `;

  const TaskItem = styled(List.Item)`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <TasksList
      header="Задачи"
      bordered
      dataSource={tasks}
      renderItem={(item: any) => (
        <TaskItem>
          <TaskCard
            title={item.attributes.title}
            description="Мне задали дз по математике, ин язу, русскому языку и географии"
            createdAt="16.07.24"
            updatedAt="16.07.24"
          />
        </TaskItem>
      )}
    ></TasksList>
  );
};

export default TaskList;
