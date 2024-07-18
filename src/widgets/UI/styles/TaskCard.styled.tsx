import styled from "styled-components";
import { Button } from "antd";
import { ReactComponent as DoneIcon } from "@shared/icons/done.svg";
import { ReactComponent as StarIcon } from "@shared/icons/star.svg";

const Style = {
  Card: styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
    width: 50vw;

    margin: 10px;
    padding: 15px;

    transform: translateY(0);
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  `,

  Wrapper1: styled.div`
    display: flex;
    gap: 15px;
    max-width: calc(100% - 40px); // вычитаем ширину звезды
    flex-shrink: 1;
  `,

  Title: styled.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  DoneButton: styled(Button)`
    z-index: 30;

    display: flex;
    justify-content: center;
    align-items: center;

    outline: 4px solid black;
    outline-offset: -4px;

    transition: all 0.1s ease-in-out;
  `,

  DoneSvg: styled(DoneIcon)`
    width: 70%;
    z-index: 10;
    height: 100%;
  `,

  FavSvg_init: styled(StarIcon)`
    z-index: 10;
    width: 40px;
    height: 40px;

    transition: all 0.1s ease-in-out;
    fill: none;

    &:hover path {
      stroke: #1677ff;
    }
  `,

  FavSvg_added: styled(StarIcon)`
    z-index: 10;
    width: 40px;
    height: 40px;

    transition: all 0.1s;
    fill: #1677ff;

    path {
      stroke: #1677ff;
      transition: all 0.1s;
    }

    &:hover {
      fill: #4096ff;
    }
    &:hover path {
      stroke: #4096ff;
    }
  `,
};

export default Style;
