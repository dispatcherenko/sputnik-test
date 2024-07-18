import useTasksStore from "@features/tasks/tasks";
import { Checkbox, Collapse } from "antd";
import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FiltersCollapse = styled(Collapse)`
  position: absolute;
  width: 180px;
  right: 10px;
  z-index: 1000;

  user-select: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type PropTypes = {
  options: Filter[];
  checkedList: Filter[];
  setCheckedList: (newCheckedList: Filter[]) => void;
};

const TasksHeader = ({ options, checkedList, setCheckedList }: PropTypes) => {
  const { updateFilter } = useTasksStore();

  const indeterminate =
    checkedList.length > 0 && checkedList.length < options.length;
  const checkAll = options.length === checkedList.length;

  const handleCheckAllChange = (event: any) => {
    const isChecked = event.target.checked;
    const filters = isChecked ? options : [];
    setCheckedList(filters);
    updateFilter(filters);
  };

  const handleCheckboxChange = (filter: Filter) => {
    const isChecked = checkedList.some((item) => item.value === filter.value);
    const filters = isChecked
      ? checkedList.filter((item) => item.value !== filter.value)
      : [...checkedList, filter];
    setCheckedList(filters);
    updateFilter(filters);
  };

  return (
    <Header>
      <h1>Задачи</h1>
      <FiltersCollapse
        items={[
          {
            label: "Фильтры",
            children: (
              <CheckboxWrapper>
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={handleCheckAllChange}
                  checked={checkAll}
                >
                  Все
                </Checkbox>
                {options.map((option) => (
                  <Checkbox
                    key={option.value}
                    checked={checkedList.some(
                      (item) => item.value === option.value
                    )}
                    onChange={() => handleCheckboxChange(option)}
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </CheckboxWrapper>
            ),
          },
        ]}
      />
    </Header>
  );
};

export default TasksHeader;
