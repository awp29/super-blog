interface Props {
  children: React.ReactNode;
}

const Item = (props: Props) => {
  const { children } = props;
  return <div className="flex flex-col gap-[2px]">{children}</div>;
};

export default Item;
