interface Props {
  children: React.ReactNode;
}

const Author = (props: Props) => {
  const { children } = props;
  return <p className="text-[#000933A6] text-[12px]">{children}</p>;
};

export default Author;
