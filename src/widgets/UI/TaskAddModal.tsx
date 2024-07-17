import { Modal, Input, Typography } from "antd";
import { useState } from "react";

interface ModalProps<T> {
  isOpen: boolean;
  onOk: (data: T) => void;
  onCancel: () => void;
}

export const useModal = <T,>(init: T) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<T>(init);

  const showModal = (data?: T) => {
    setData(data || init);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalProps: ModalProps<T> = {
    isOpen: isModalOpen,
    onOk: handleOk,
    onCancel: handleCancel,
  };

  return { modalProps, showModal, data, setData };
};

const TaskAddModal = (props: any) => {
  return (
    <Modal {...props}>
      <div>
        <Typography.Title level={5}>Название задачи</Typography.Title>
        <Input />
      </div>
      <div>
        <Typography.Title level={5}>Описание задачи</Typography.Title>
        <Input />
      </div>
    </Modal>
  );
};

export default TaskAddModal;

// {
//     "data": {
//       "title": "string",
//       "description": "string",
//       "status": "string" - не нужно
//     }
// }
