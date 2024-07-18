import { Button, List } from "antd";
import styled from "styled-components";

const Style = {
  TasksList: styled(List)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
    border: none;

    margin: 5vh 10vw 150px;
  `,

  TaskItem: styled(List.Item)`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  MoreButton: styled(Button)`
    text-align: center;
    height: 32;
    line-height: 32px;
    margin: 15px 30vw;
  `,
};

export default Style;
