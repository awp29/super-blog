import { inter } from "@/app/fonts";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
}

const PostTitle = (props: Props) => {
  const { children } = props;
  return (
    <h1
      className={cn(
        inter.className,
        "text-[#000626E6] text-[40px] font-semibold mt-[16px]"
      )}
    >
      {children}
    </h1>
  );
};

export default PostTitle;
