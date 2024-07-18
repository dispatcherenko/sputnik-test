import { useState } from "react";
import TaskCard from "../UI/TaskCard";
import { Button, Modal, Typography } from "antd";
import useTasksStore from "@features/tasks/tasks";
import TasksHeader from "./TaskListHeader";
import Style from "./styles/TaskList.styled";

const options = [
  { label: "Выполненные", value: "complete" },
  { label: "Невыполненные", value: "notComplete" },
  { label: "Избранное", value: "favorites" },
];
const defaultCheckedList = [...options];

const TaskList = () => {
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
      <Style.MoreButton onClick={onLoadMore}>Загрузить еще...</Style.MoreButton>
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
      <Style.TasksList
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
          <Style.TaskItem>
            <TaskCard
              item={item}
              showModal={showModal}
              setSelectedItem={setSelectedItem}
            />
          </Style.TaskItem>
        )}
      ></Style.TasksList>
    </>
  );
};

export default TaskList;
