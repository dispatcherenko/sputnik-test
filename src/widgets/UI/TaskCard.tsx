import useTasksStore from "@features/tasks/tasks";
import { useEffect, useState } from "react";
import Style from "./styles/TaskCard.styled";

const TaskCard = (props: any) => {
  const { id, attributes } = props.item;
  const { changeTask, toggleFavorite, favorites } = useTasksStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.find((element) => element.id === props.item.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites]);

  const handleOnClick = () => {
    props.setSelectedItem({ ...props.item });
    props.showModal();
  };

  const handleDoneButton = (e: any) => {
    e.stopPropagation();
    changeTask(id, props.item);
  };

  const handleFavoriteButton = (e: any) => {
    e.stopPropagation();
    toggleFavorite(props.item);
  };

  const doneStatus = attributes.status.includes("not")
    ? {}
    : {
        style: { outline: "none" },
        type: "primary" as "primary" | undefined,
        icon: <Style.DoneSvg fill="white" />,
      };

  return (
    <Style.Card onClick={handleOnClick}>
      <Style.Wrapper1>
        <Style.DoneButton
          size="large"
          shape="circle"
          onClick={handleDoneButton}
          {...doneStatus}
        />

        <Style.Title>{attributes.title}</Style.Title>
      </Style.Wrapper1>
      {isFavorite ? (
        <Style.FavSvg_added onClick={handleFavoriteButton} />
      ) : (
        <Style.FavSvg_init onClick={handleFavoriteButton} />
      )}
    </Style.Card>
  );
};

export default TaskCard;
