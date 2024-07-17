import React, { useState } from "react";
import TaskCard from "./UI/TaskCard";
import { Button, List, Modal, Typography } from "antd";
import useTasksStore from "@entities/Tasks";
import styled from "styled-components";
import TasksHeader from "./TasksHeader";

const TasksList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
  border: none;

  margin: 5vh 10vw 150px;
`;

const TaskItem = styled(List.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MoreButton = styled(Button)`
  text-align: center;
  height: 32;
  line-height: 32px;
  margin: 15px 30vw;
`;

const options = [
  { label: "Выполненные", value: "complete" },
  { label: "Невыполненные", value: "notComplete" },
  { label: "Избранное", value: "favorites" },
];
const defaultCheckedList = [...options];

const TaskList = (props: any) => {
  const [checkedList, setCheckedList] = useState<Filter[]>(defaultCheckedList);

  const {
    filteredTasks,
    deleteTask,
    isLoading,
    fetchTasks,
    increaseLimit,
    total,
    limit,
  } = useTasksStore();

  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    attributes: {
      title: "",
      description: "",
      status: "",
      createdAt: "",
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    deleteTask(selectedItem.id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onLoadMore = () => {
    increaseLimit();
    fetchTasks();
  };

  const loadMore =
    !isLoading && limit < total ? (
      <MoreButton onClick={onLoadMore}>Загрузить еще...</MoreButton>
    ) : null;

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={
          <Button danger onClick={handleDelete}>
            Удалить
          </Button>
        }
        onCancel={handleCancel}
      >
        <div>
          <Typography.Title level={5}>Название задачи</Typography.Title>
          <Typography.Text>{selectedItem.attributes.title}</Typography.Text>
        </div>
        <div>
          <Typography.Title level={5}>Описание задачи</Typography.Title>
          <Typography.Text>
            {selectedItem.attributes.description}
          </Typography.Text>
        </div>
        <div>
          <Typography.Title level={5}>Дата создания</Typography.Title>
          <Typography.Text>
            {new Date(selectedItem.attributes.createdAt).toLocaleString()}
          </Typography.Text>
        </div>
      </Modal>
      <TasksList
        header={
          <TasksHeader
            options={options}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        }
        loading={isLoading}
        loadMore={loadMore}
        bordered
        dataSource={filteredTasks}
        renderItem={(item: any) => (
          <TaskItem>
            <TaskCard
              item={item}
              showModal={showModal}
              setSelectedItem={setSelectedItem}
            />
          </TaskItem>
        )}
      ></TasksList>
    </>
  );
};

export default TaskList;
