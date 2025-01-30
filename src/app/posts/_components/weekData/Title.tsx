import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Title = (props: Props) => {
  const { children } = props;
  return (
    <a href="blah" className="text-[#000933A6] text-[14px] w-fit underline">
      {children}
      <Image
        className="inline relative top-[-1px] ml-[2px]"
        src="/icons/arrowUpRight.svg"
        alt="an arrow pointing right"
        width={20}
        height={20}
      />
    </a>
  );
};

export default Title;
