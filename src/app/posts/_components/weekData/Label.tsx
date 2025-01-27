import { inter } from "@/app/fonts";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
}

const Label = (props: Props) => {
  const { children } = props;
  return (
    <h4
      className={cn(
        inter.className,
        "text-[#000626E6] text-[14px] font-semibold"
      )}
    >
      {children}
    </h4>
  );
};

export default Label;
