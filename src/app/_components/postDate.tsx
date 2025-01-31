interface Props {
  children: React.ReactNode;
}

const PostDate = (props: Props) => {
  const { children } = props;

  return <p className="text-[#000933A6] text-[14px]">{children}</p>;
};

export default PostDate;
