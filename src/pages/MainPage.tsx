import { useState } from "react";
import TaskList from "@widgets/TaskList";
import { Button, Input, Modal, Typography } from "antd";
import styled from "styled-components";
import useTasksStore from "@entities/Tasks";

const AddButton = styled(Button)`
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  z-index: 1000;
`;

const MainPage = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "",
  });

  const { addTask } = useTasksStore();

  const showModal = () => {
    setNewTask({
      title: "",
      description: "",
      status: "",
    });
    setIsModalOpen(true);
  };
  const handleOk = () => {
    addTask(newTask);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setNewTask({
      title: "",
      description: "",
      status: "",
    });
  };

  return (
    <div>
      <TaskList />
      <AddButton size="large" type="primary" onClick={showModal}>
        <h1>Добавить задачу</h1>
      </AddButton>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <Typography.Title level={5}>Название задачи</Typography.Title>
          <Input
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
        <div>
          <Typography.Title level={5}>Описание задачи</Typography.Title>
          <Input
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default MainPage;
