import { Collapse } from "antd";
import styled from "styled-components";

const Style = {
  Header: styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,

  FiltersCollapse: styled(Collapse)`
    position: absolute;
    width: 180px;
    right: 10px;
    z-index: 1000;

    user-select: none;
  `,

  CheckboxWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default Style;
