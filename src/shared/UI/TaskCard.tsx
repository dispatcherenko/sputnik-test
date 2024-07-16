import React from "react";
import { HandySvg } from "handy-svg";
import done from "@shared/icons/done.svg";
import star from "@shared/icons/star.svg";

import styled from "styled-components";

const TaskCard = (props: any) => {
  const Card = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);
    width: 30vw;

    margin: 10px;
    padding: 15px;
  `;

  const Wrapper1 = styled.div`
    display: flex;
    gap: 15px;

    text-overflow: ellipsis;
  `;

  const DoneButton = styled.button`
    z-index: 30;

    display: flex;
    border-radius: 100%;
    border: none;
    background-color: transparent;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    transition: all 0.1s ease-in-out;

    &::after {
      content: "";
      background-color: white;
      border-radius: 100%;
      border: 2px solid rgb(190, 190, 190);

      position: absolute;
      z-index: 20;

      width: inherit;
      height: inherit;

      transition: all 0.1s ease-in-out;
    }

    &:hover::after {
      background-color: transparent;
    }

    &:disabled {
      background-color: rgb(43, 110, 255);
    }

    &:disabled::after {
      border: none;
      background-color: transparent;
    }
  `;

  const DoneSvg = styled(HandySvg)`
    width: 70%;
    z-index: 10;
    height: 100%;
  `;

  const FavSvg = styled(HandySvg)`
    width: 70%;
    z-index: 10;
    width: 40px;
    height: 40px;

    transition: all 0.1s ease-in-out;

    &:hover {
      fill: rgba(100, 100, 100, 0.5);
    }
  `;

  return (
    <Card>
      <Wrapper1>
        {" "}
        <DoneButton disabled={false}>
          <DoneSvg fill="black" src={done} />
        </DoneButton>
        <h2>{props.title}</h2>
      </Wrapper1>
      <FavSvg fill="none" src={star} />
    </Card>
  );
};

export default TaskCard;
