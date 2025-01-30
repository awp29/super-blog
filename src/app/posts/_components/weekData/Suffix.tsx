interface Props {
  children: React.ReactNode;
}

const Suffix = (props: Props) => {
  const { children } = props;

  return (
    <span className="text-[#000933A6] text-[12px] no-underline ml-[6px]">
      {children}
    </span>
  );
};

export default Suffix;
