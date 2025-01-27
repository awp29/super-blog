interface Props {
  children: React.ReactNode;
}

const PostBodyText = (props: Props) => {
  const { children } = props;
  return <p className="text-[#000626E6] mt-[20px]">{children}</p>;
};

export default PostBodyText;
