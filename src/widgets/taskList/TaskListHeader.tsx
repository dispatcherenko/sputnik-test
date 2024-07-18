import useTasksStore from "@features/tasks/tasks";
import { Checkbox, Collapse } from "antd";
import { useState } from "react";
import Style from "./styles/TaskListHeader.styled";

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
    <Style.Header>
      <h1>Задачи</h1>
      <Style.FiltersCollapse
        items={[
          {
            label: "Фильтры",
            children: (
              <Style.CheckboxWrapper>
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
              </Style.CheckboxWrapper>
            ),
          },
        ]}
      />
    </Style.Header>
  );
};

export default TasksHeader;
