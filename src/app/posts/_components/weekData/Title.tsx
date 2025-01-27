interface Props {
  children: React.ReactNode;
}

const Title = (props: Props) => {
  const { children } = props;
  return <p className="text-[#000933A6] text-[14px]">{children}</p>;
};

export default Title;
