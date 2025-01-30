import Author from "./Author";
import Item from "./Item";
import Label from "./Label";
import Title from "./Title";
import Suffix from "./Suffix";

interface Props {
  children: React.ReactNode;
}

const WeekData = (props: Props) => {
  const { children } = props;
  return <div className="flex flex-col gap-[8px]">{children}</div>;
};

WeekData.Item = Item;
WeekData.Label = Label;
WeekData.Title = Title;
WeekData.Author = Author;
WeekData.Suffix = Suffix;

export default WeekData;
